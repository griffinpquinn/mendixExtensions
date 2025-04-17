# Teamcenter SOA API Browser Extension for Mendix Studio Pro

This extension integrates the Teamcenter SOA API Browser into Mendix Studio Pro, allowing developers to easily access and explore the Teamcenter SOA API documentation while developing Mendix applications.

## Features

- Access the complete Teamcenter SOA API documentation directly within Mendix Studio Pro
- Navigate and filter by libraries, services, and operations
- View detailed information about API operations, including request and response structures
- Search functionality to find specific API operations quickly

## Installation

1. Build the extension:
```bash
npm install
npm run build
```

2. Copy the extension to your Mendix app project:
   - Copy the `dist/teamcenterapi` directory to the `webextensions` directory in your Mendix app project
   - The resulting structure should be:
   ```
   <app directory>/
     App.mpr
     ...
     webextensions/
       teamcenterapi/
         manifest.json
         main.js
         ui.js
         SOA/
           index.html
           structure.js
           api.js
           angular.min.js
   ```

3. Start Studio Pro with the `--enable-extension-development` feature flag.

4. Open your Mendix app in Studio Pro and navigate to "Extensions > Teamcenter API Browser > SOA API Browser".

## Usage

1. Use the filters panel to narrow down the operations by library and service
2. Use the search box to find specific operations
3. Click on an operation to view its details, including:
   - Description
   - Library, Service, Year, URL information
   - SOA dependency inclusion
   - Request and response structure examples

## Development

This extension is built using:
- TypeScript
- React
- Mendix Extension API
- Vite for building
