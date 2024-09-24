# LaloLens Project Deployment Guide

## Overview

The LaloLens project is a Vite-powered application designed to build and deploy web content using a structured environment. It uses Makefiles for automation, handles different deployment scenarios (local vs. Codespaces), and is set up to deploy to GitHub Pages using GitHub Actions.

## Why `/var/www/html/lalolens`?

The directory `/var/www/html/lalolens` is chosen because:
- It’s the default location where the Apache web server looks for files to serve. By placing our project here, we ensure Apache can easily find and serve our Vite build without additional configuration.
- Using a subfolder (`lalolens`) under `/var/www/html/` keeps our project organized and separates it from other potential projects hosted on the same server.

## Prerequisites

Ensure you have the following installed:
- **Node.js** (version 18 or later): Required to run and build the Vite project.
- **Apache2**: As the web server to serve the built files.
- **Make**: To execute the provided Makefiles for automation.
- **Git**: For version control and deployment to GitHub.

## Directory Structure

- **`lalolens.root`**: The root folder of your Vite project containing the source files.
- **`/var/www/html/lalolens`**: The target directory where your built files will be copied. This allows Apache to serve them correctly.

## How the Project Works

### 1. Building the Project
The project uses a Makefile to automate the build process. When you run the build command, Vite compiles your project and places the output in `/var/www/html/lalolens`.

**Why?** This ensures that Apache can serve the latest build directly from the directory it's configured to access.

### Steps to Build
To build the project, simply run:
```bash
make build

This command will:
- Check if the `/var/www/html/lalolens/` directory exists and delete it if necessary.
- Run the Vite build process to generate the output files.

### 2. Serving the Project

#### Local Environment
If you're working on your local machine, you can start the Apache server and serve your Vite project using:
```bash
make start-localhost
```
This command will:
- Install Apache if it’s not already installed.
- Configure permissions and copy files into `/var/www/html/lalolens`.
- Start the Apache service using `systemctl`.

#### Codespaces Environment
If you're working within GitHub Codespaces, use:
```bash
make start-codespace-localhost
```
This command will:
- Install Apache and configure it to work within Codespaces.
- Handle permissions and start the Apache server using the `service` command.

### 3. Stopping and Restarting the Project

You can stop or restart the Apache server to manage the deployed application.

- **Stop the local environment server:**
  ```bash
  make stop-localhost
  ```
- **Stop the Codespaces environment server:**
  ```bash
  make stop-codespace-localhost
  ```
- **Restart the server locally:**
  ```bash
  make restart-localhost
  ```
- **Restart the server in Codespaces:**
  ```bash
  make restart-codespace-localhost
  ```

### 4. Deploying to GitHub Pages

The deployment is automated using GitHub Actions via the `.github/workflows/deploy.yml` workflow file.

#### How Deployment Works

- **Step 1**: When you push changes to the `main` branch, GitHub Actions triggers the workflow.
- **Step 2**: The workflow builds your project, generating the output files, and uploads them as an artifact.
- **Step 3**: The artifact is then deployed to GitHub Pages.

You don't need to manually trigger deployment unless desired, as every push to `main` redeploys the site.

## Explanation of Key Components

### Why Use Makefiles?
Makefiles provide a convenient way to automate repetitive tasks such as building, starting, stopping, and restarting the server. By defining these commands in a Makefile, we ensure consistency across different environments (local and Codespaces) and avoid manual errors.

### Why Are We Setting Permissions?
The project files need appropriate permissions (`chown` and `chmod`) to ensure that both Apache (running as `www-data`) and your user can access and modify the files. This avoids permission-related errors during deployment.

### The Setup Script

The `setup` script configures the project for Apache:
- It copies the built files into `/var/www/html/lalolens`.
- Sets up the necessary Apache virtual host configuration.
- Adds an entry to `/etc/hosts` for easy access via `http://lalolens.local`.

This ensures that Apache is properly configured to serve the latest version of your application.

### Why Use GitHub Actions for Deployment?
GitHub Actions automates the deployment process to GitHub Pages, ensuring that every change you push is automatically reflected on your live site. This approach reduces manual deployment steps and ensures a consistent, repeatable process.

## Troubleshooting

- **Permission Denied**: Ensure you run commands that interact with `/var/www/html` using `sudo` or as a user with the necessary permissions.
- **Apache Issues**: If Apache doesn’t start or isn't serving your files, check its status using:
  ```bash
  sudo systemctl status apache2  # For local
  sudo service apache2 status    # For Codespaces
  ```

## Conclusion

This project leverages a combination of Vite, Makefiles, Apache, and GitHub Actions to create an efficient build and deployment workflow. By organizing the build output in `/var/www/html/lalolens` and using automation tools, we ensure a smooth and consistent deployment process both locally and on GitHub Pages.

Enjoy building and deploying with LaloLens!
``` 

### Key Explanations Added:
- The reason for using `/var/www/html/lalolens` and how it relates to Apache's configuration.
- The purpose of using Makefiles for automation.
- How permissions (`chown` and `chmod`) ensure smooth deployment.
- The role of GitHub Actions in automated deployment. 

This README is now comprehensive and provides clarity on every aspect of the setup, build, and deployment process for your Vite project.
