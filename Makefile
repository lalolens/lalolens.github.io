# Master Makefile
.PHONY: all codespaces local install build start apache-install setup start-localhost start-codespace-localhost usage

# Default target that builds the project
all: install build

# Install project dependencies
install:
	cd lalolens.root && npm install

# Build the project
build:
	@if [ -d "/var/www/html/lalolens/" ]; then \
		echo "Directory exists. Deleting /var/www/html/lalolens/"; \
		sudo rm -rf /var/www/html/lalolens/; \
	else \
		echo "Directory does not exist. Skipping deletion."; \
	fi
	cd lalolens.root && sudo npm run build 

# Start the development server
start:
	cd lalolens.root && npm run dev


# Run the Codespaces Makefile
codespace:
	$(MAKE) -f Makefiles/Makefile.codespace $(MAKECMDGOALS)

# Run the Local Makefile
local:
	$(MAKE) -f Makefiles/Makefile.local $(MAKECMDGOALS)


# Install Apache (auto-detect Codespaces or Local)
apache-install:
	@echo "Installing Apache..."
	sudo apt update
	sudo apt install -y apache2

# Ensure the correct permissions for the Codespaces environment
apache-auth:
	@echo "Setting permissions for /var/www/html/lalolens..."
	sudo chown -R $(whoami):www-data /var/www/html/lalolens
	sudo chmod -R 775 /var/www/html/lalolens


# Start both app and Apache for local environment
start-localhost: all apache-install apache-auth
	sudo -E env "IS_CODESPACE=false" ./scripts/setup-apache-environment.sh
	$(MAKE) -f Makefiles/Makefile.local apache-start

# Start both app and Apache for Codespaces environment
start-codespace-localhost: all apache-install apache-auth
	sudo -E env "IS_CODESPACE=true" ./scripts/setup-apache-environment.sh
	$(MAKE) -f Makefiles/Makefile.codespace apache-start

# Stop both app and Apache for local environment
stop-localhost: 
	$(MAKE) -f Makefiles/Makefile.local apache-stop

# Stop both app and Apache for Codespaces environment
stop-codespace-localhost: 
	$(MAKE) -f Makefiles/Makefile.codespace apache-stop

# Restart both app and Apache for local environment
restart-localhost: 
	$(MAKE) -f Makefiles/Makefile.local apache-restart

# Restart both app and Apache for Codespaces environment
restart-codespace-localhost: 
	$(MAKE) -f Makefiles/Makefile.codespace apache-restart

# Display usage information
usage:
	@echo "Usage: make [codespaces|local|setup|usage|start-localhost|start-codespace-localhost|stop-localhost|stop-codespace-localhost|restart-localhost|restart-codespace-localhost]"
	@echo ""
	@echo "Commands:"
	@echo "  usage                      - Learn to use this makefile"
	@echo "  install                    - Install project dependencies"
	@echo "  build                      - Build the project"
	@echo "  start                      - Start the development server"
	@echo "  apache-install             - Install Apache"
	@echo "  setup                      - Set up the project files and Apache configuration"
	@echo "  start-localhost            - Start the app and Apache in the local environment"
	@echo "  start-codespace-localhost  - Start the app and Apache in Codespaces"
	@echo "  stop-localhost             - Stop the app and Apache in the local environment"
	@echo "  stop-codespace-localhost   - Stop the app and Apache in Codespaces"
	@echo "  restart-localhost          - Restart the app and Apache in the local environment"
	@echo "  restart-codespace-localhost - Restart the app and Apache in Codespaces"
	@echo ""
	@echo "Examples:"
	@echo "  make codespaces apache-start      - Start Apache in Codespaces"
	@echo "  make local apache-start           - Start Apache on the local environment"
	@echo "  make start-localhost              - Start the project and Apache locally"
	@echo "  make start-codespace-localhost    - Start the project and Apache in Codespaces"
	@echo "  make stop-localhost               - Stop the project and Apache locally"
	@echo "  make stop-codespace-localhost     - Stop the project and Apache in Codespaces"
	@echo "  make restart-localhost            - Restart the project and Apache locally"
	@echo "  make restart-codespace-localhost  - Restart the project and Apache in Codespaces"
