# Master Makefile
.PHONY: all codespaces local install build start apache-install setup start-localhost start-codespace-localhost usage

############################################################################################
# 										VARIABLES									       #
############################################################################################
# APACHE_MAKEFILE = Makefiles/Makefile.apache
MAKE_APACHE = $(MAKE) -f Makefiles/Makefile.apache
WWWROOT = lalolens.root
PLAYGROUND_PROJECT = lalolens.playground
############################################################################################



############################################################################################
# 										  Vite Commands					      		       #
############################################################################################
# Default target that builds the project
all: sync_playground install build

sync_playground:
	@echo "Building the playground project..."
	cd $(PLAYGROUND_PROJECT) && npm install
	cd $(PLAYGROUND_PROJECT) && npm run build

# Install project dependencies
install:
	@echo "Installing project dependencies..."
	cd $(WWWROOT) && npm install
	@echo ""

# Build the project
build:
	@echo "Building the project..."
	cd $(WWWROOT) && npm run build 
	@echo "Build completed successfully."
	@echo ""

# Start the development server
start:
	@echo "Starting the development server..."
	cd $(WWWROOT) && npm run dev
	@echo "Development server is now running."
	@echo ""
############################################################################################



############################################################################################
# Local Testing																			   #
############################################################################################
### LOCAL
# Start both app and Apache for local environment
start-local-apache-server: all
	@echo "Starting Apache server for the local environment..."
	sudo IS_CODESPACE=false . ./scripts/setup-apcache-environment
	$(MAKE_APACHE) apache-systemctl-start
	@echo "Local Apache server started successfully."
	@echo ""

# Stop both app and Apache for local environment
stop-local-apache-server: 
	@echo "Stopping Apache server for the local environment..."
	$(MAKE_APACHE) apache-systemctl-stop
	@echo "Local Apache server stopped successfully."
	@echo ""

# Restart both app and Apache for local environment
restart-local-apache-server: all
	@echo "Restarting Apache server for the local environment..."
	$(MAKE_APACHE) apache-systemctl-restart
	@echo "Local Apache server restarted successfully."
	@echo ""
# Restart both app and Apache for local environment
reload-local-apache-server: all
	@echo "Reloading Apache server for the local environment..."
	$(MAKE_APACHE) apache-systemctl-reload
	@echo "Local Apache server reloaded successfully."
	@echo ""

### CODESPACE LOCAL 
# Start both app and Apache for Codespaces environment
start-codespace-apache-server: all
	@echo "Starting Apache server in Codespaces..."
	sudo IS_CODESPACE=true . ./scripts/setup-apcache-environment
	$(MAKE_APACHE) apache-service-start
	@echo "Apache server in Codespaces started successfully."
	@echo ""

# Stop both app and Apache for Codespaces environment
stop-codespace-apache-server: 
	@echo "Stopping Apache server in Codespaces..."
	$(MAKE_APACHE) apache-service-stop
	@echo "Apache server in Codespaces stopped successfully."
	@echo ""

# Restart both app and Apache for Codespaces environment
restart-codespace-apache-server: all
	@echo "Restarting Apache server in Codespaces..."
	$(MAKE_APACHE) apache-service-restart
	@echo "Apache server in Codespaces restarted successfully."
	@echo ""

# Reload Apache configuration in Codespaces environment
reload-codespace-apache-server: all
	@echo "Reloading Apache configuration in Codespaces..."
	$(MAKE_APACHE) apache-service-reload
	@echo "Apache configuration in Codespaces reloaded successfully."
	@echo ""
############################################################################################



# Display usage information
usage:
	@echo "============================== Makefile Usage =============================="
	@echo "Usage: make [command]"
	@echo ""
	@echo "Available Commands:"
	@echo "------------------------------------------------------------------------------------"
	@echo "  all                        - Build the entire project (runs 'install' and 'build')."
	@echo "  install                    - Install all project dependencies using npm."
	@echo "  build                      - Build the project using npm."
	@echo "  start                      - Start the development server using npm."
	@echo ""
	@echo "Local Testing Commands:"
	@echo "------------------------------------------------------------------------------------"
	@echo "  start-local-apache-server  - Start the project and Apache server in the local environment."
	@echo "  stop-local-apache-server   - Stop the Apache server in the local environment."
	@echo "  restart-local-apache-server - Restart the project and Apache server in the local environment."
	@echo ""
	@echo "Codespaces Commands:"
	@echo "------------------------------------------------------------------------------------"
	@echo "  start-codespace-apache-server  - Start the project and Apache server in the Codespaces environment."
	@echo "  stop-codespace-apache-server   - Stop the Apache server in the Codespaces environment."
	@echo "  restart-codespace-apache-server - Restart the Apache server in the Codespaces environment."
	@echo "  reload-codespace-apache-server - Reload Apache configuration in Codespaces."
	@echo ""
	@echo "Apache Commands (Apache Installation and Setup):"
	@echo "------------------------------------------------------------------------------------"
	@echo "  apache-install             - Install Apache server."
	@echo "  apache-set-wwwroot         - Set the Apache web root to the project."
	@echo "  apache-auth                - Set proper permissions for Apache in the Codespaces environment."
	@echo ""
	@echo "Advanced Apache Commands (Manage Apache Service):"
	@echo "------------------------------------------------------------------------------------"
	@echo "  apache-service-start       - Start the Apache server using 'service'."
	@echo "  apache-service-stop        - Stop the Apache server using 'service'."
	@echo "  apache-service-restart     - Restart the Apache server using 'service'."
	@echo "  apache-service-reload      - Reload the Apache server configuration using 'service'."
	@echo "  apache-systemctl-start     - Start the Apache server using 'systemctl'."
	@echo "  apache-systemctl-stop      - Stop the Apache server using 'systemctl'."
	@echo "  apache-systemctl-restart   - Restart the Apache server using 'systemctl'."
	@echo "  apache-systemctl-reload    - Reload the Apache server configuration using 'systemctl'."
	@echo ""
	@echo "Examples:"
	@echo "------------------------------------------------------------------------------------"
	@echo "  make install                     - Install project dependencies."
	@echo "  make build                       - Build the project."
	@echo "  make start                       - Start the development server."
	@echo "  make start-local-apache-server   - Start Apache server locally."
	@echo "  make restart-codespace-apache-server - Restart Apache in Codespaces."
	@echo ""
	@echo "==========================================================================="
	@echo "Use 'make usage' to view this information again."
