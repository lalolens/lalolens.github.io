#!/bin/bash

# Variables
PROJECT_NAME="lalolens"
PROJECT_DIR="/var/www/html/$PROJECT_NAME"
APACHE_CONF="/etc/apache2/sites-available/$PROJECT_NAME.conf"
HTACCESS_FILE="$PROJECT_DIR/.htaccess"

echo "Setting up your project..."

# Check if the user has sudo privileges
if [ "$EUID" -ne 0 ]; then
    echo "Please run as root (e.g., sudo ./setup-apache-environment.sh)"
    exit 1
fi

# Check if IS_CODESPACE is set
if [ "$IS_CODESPACE" = "true" ]; then
    echo "Detected Codespaces environment - using 'service' commands"
else
    echo "Detected local environment - using 'systemctl' commands"
fi

# Create the project directory under /var/www/html
echo "Creating project directory at $PROJECT_DIR..."
sudo mkdir -p "$PROJECT_DIR"

# Copy project files into the project directory
echo "Copying project files into $PROJECT_DIR..."
sudo cp -r ./lalolens.root/public/* "$PROJECT_DIR"

# Set permissions for Apache to access the project files
echo "Setting permissions for Apache..."
sudo chown -R www-data:www-data "$PROJECT_DIR"
sudo chmod -R 755 "$PROJECT_DIR"

# Create an Apache Virtual Host configuration
echo "Creating Apache configuration..."
sudo bash -c "cat <<EOL > $APACHE_CONF
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot $PROJECT_DIR
    ServerName $PROJECT_NAME.local

    <Directory $PROJECT_DIR>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted

        # Enable mod_rewrite but avoid using RewriteBase here
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>

    ErrorLog \${APACHE_LOG_DIR}/error.log
    CustomLog \${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
EOL"

# Create the .htaccess file for client-side routing
echo "Creating .htaccess file for client-side routing..."
sudo bash -c "cat <<EOL > $HTACCESS_FILE
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
EOL"

# Set the global ServerName directive to suppress warnings
echo "Setting the global ServerName directive to suppress warnings..."
if ! grep -q "ServerName" /etc/apache2/apache2.conf; then
    echo "ServerName localhost" | sudo tee -a /etc/apache2/apache2.conf
    echo "ServerName directive added to /etc/apache2/apache2.conf"
fi

# Disable the default Apache site to avoid conflicts
echo "Disabling the default Apache site..."
sudo a2dissite 000-default.conf

# Enable necessary Apache modules
echo "Enabling necessary Apache modules..."
sudo a2enmod rewrite

# Enable the new site
echo "Enabling Apache site..."
sudo a2ensite "$PROJECT_NAME.conf"

# Reload Apache based on the environment
if [ "$IS_CODESPACE" = "true" ]; then
    sudo service apache2 reload
else
    sudo systemctl reload apache2
fi

# Add to /etc/hosts for local access
if ! grep -q "$PROJECT_NAME.local" /etc/hosts; then
    echo "127.0.0.1 $PROJECT_NAME.local" | sudo tee -a /etc/hosts
    echo "Added $PROJECT_NAME.local to /etc/hosts."
fi

echo "Setup complete! You can access your project at http://$PROJECT_NAME.local"
