import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

// SOA API Browser Component
const SOAApiBrowser = () => {
  const [baseUrl, setBaseUrl] = useState("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Function to calculate the extension's base URL
    const determineBaseUrl = () => {
      const scriptTags = document.getElementsByTagName('script');
      for (let i = 0; i < scriptTags.length; i++) {
        const src = scriptTags[i].getAttribute('src') || '';
        if (src.includes('ui.js')) {
          // Extract the base path from the script URL
          const basePath = src.substring(0, src.lastIndexOf('/') + 1);
          return basePath;
        }
      }
      return "";
    };

    // Function to load SOA app directly into the DOM
    const loadSOAApp = async () => {
      try {
        const calculatedBaseUrl = determineBaseUrl();
        setBaseUrl(calculatedBaseUrl);
        
        // Create container element
        const container = document.createElement('div');
        container.id = 'main';
        container.style.height = '100%';
        
        // Get the parent element where we'll mount the app
        const mountPoint = document.getElementById('soa-container');
        if (mountPoint) {
          mountPoint.appendChild(container);
          
          // Load the Angular script first
          await loadScript(`${calculatedBaseUrl}SOA/angular.min.js`);
          
          // Load the structure script
          await loadScript(`${calculatedBaseUrl}SOA/structure.js`);
          
          // Load the API script
          await loadScript(`${calculatedBaseUrl}SOA/api.js`);
          
          // Load the styles
          loadStyles();
          
          // Set up Angular app manually
          const angularApp = document.createElement('div');
          angularApp.id = 'main';
          angularApp.setAttribute('ng-controller', 'SoaController2');
          angularApp.innerHTML = `
            <div class="panel navigationArea">
              <div class="panelTitle">Filters</div>
              <div class="panelContent" id="filterPanel">
                <div class="filterLabel"
                  ng-click="setSearchTerm('')"
                  ng-class="{bold: searchTerm}">
                  Search
                </div>
                <input type="text" class="searchBox" ng-model="searchTerm">
                <div class="filterLabel"
                  ng-click="setLib('')"
                  ng-class="{bold: selectedLib}">
                  Libraries
                </div>
                <ul id="libList">
                  <li class="filterNameLabel"
                    ng-repeat="lib in libs | filter:libFilter | filter:searchTerm"
                    ng-click="setLib(lib.name)">
                    {{lib.name}}
                  </li>
                </ul>
                <div class="filterLabel"
                  ng-click="setService('')"
                  ng-class="{bold: selectedService}">
                  Services
                </div>
                <ul id="svcList">
                  <li class="filterNameLabel"
                    ng-repeat="svc in services | filter:serviceFilter | filter:searchTerm"
                    ng-click="setService(svc.name)">
                    {{svc.name}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="sublocationContent">
              <div class="title"
                ng-click="updateHash('operation', ''); resetOperation()"
                ng-class="{bold: selectedOperation}">
                Operations
              </div>
              <ul id="opList" class="cellListWidget">
                <li class="cellListItem"
                  id="{{op.url}}"
                  ng-class="{cellListItemSelected: selectedOperation===op }"
                  ng-repeat="op in operations | filter:opFilter | filter:searchTerm"
                  ng-click="updateDisplay(op)">
                  <div class="cellListCellTitle">
                    {{op.name}}
                  </div>
                  <label class="cellListCellItemType small">
                    {{op.url}}
                  </label>
                </li>
              </ul>
            </div>
            <div class="operationDisplay" id="operationDisplay">
              <div class="title" id="opName">Name: </div>
              <div class="property" id="opDesc">Description: </div>
              <div class="property" id="opLib">Library: </div>
              <div class="property" id="opService">Service: </div>
              <div class="property" id="opYear">Year: </div>
              <div class="property" id="opUrl">Url: </div>
              <div class="property" id="opInclude">Soa Dependency Inclusion: </div>
              <div class="property" id="opRequest">Request: </div>
              <div class="property" id="opResponse">Response: </div>
            </div>
          `;
          
          container.appendChild(angularApp);
          
          // Initialize the resize function
          // This function is defined in api.js
          if (typeof window.resizeList === 'function') {
            window.resizeList();
          }
          
          // Bootstrap angular manually
          if (window.angular) {
            window.angular.bootstrap(angularApp, ['DisplaySoa']);
          }
          
          setLoading(false);
        }
      } catch (error) {
        console.error('Error initializing SOA browser:', error);
        setLoading(false);
      }
    };

    // Helper function to load a script
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };
    
    // Helper function to load the necessary styles
    const loadStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        ul {
          padding: 0;
          margin: 0;
          border: 0;
          list-style: none;
          overflow: hidden;
          overflow-y: auto;
        }
        body {
          font-family: 'Segoe UI', 'Open Sans', Verdana, Arial, Helvetica, sans-serif;
        }
        .panel {
          background-color: #eee;
          color: #000;
          height: inherit;
          width: 320px;
          max-width: 320px;
        }
        .navigationArea {
          float:left;
        }
        .panelTitle {
          background-color: #d7d7cd;
          color: #000000;
          font-size: 19px;
          height: 27px;
          padding: 0 10px;
          line-height: 24px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .panelContent {
          overflow: hidden;
          text-overflow: ellipsis;
          overflow-y: auto;
        }
        .filterLabel {
          color: #006487;
          display: inline-block;
          vertical-align: bottom;
          font-size: 16px;
          padding-top: 12px;
          padding-bottom: 4px;
          margin-left: 10px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 85%;
        }
        .filterNameLabel {
          color: #006487;
          display: block;
          font-size: 13px;
          margin-top: 4px;
          margin-bottom: 4px;
          margin-left: 20px;
          cursor: pointer;
        }
        .bold {
          font-weight: 700;
          cursor: pointer;
        }
        .searchBox {
          margin-left: 20px;
          width: -webkit-calc(100% - 40px);
          width: -moz-calc(100% - 40px);
          width: calc(100% - 40px);
        }
        .sublocationContent {
          padding-left: 10px;
          float: left;
          width: 320px;
          max-width: 320px;
        }
        .title {
          color: #006487;
          font-size: 21px;
          padding-bottom: 5px;
        }
        .cellListWidget {
          list-style: none;
          padding-left: 12px;
        }
        .cellListItem {
          width: -webkit-calc(100% - 10px);
          width: -moz-calc(100% - 10px);
          width: calc(100% - 10px);
          padding-bottom: 8px;
          padding-left: 5px;
          cursor: pointer;
        }
        .cellListItem:hover {
          background-color: #cccccc;
        }
        .cellListItemSelected {
          background-color: #cccccc;
        }
        .cellListCellTitle {
          overflow: hidden;
          text-overflow: ellipsis;
          color: #000;
          font-size: 19px;
        }
        .small {
          font-size: 11px;
        }
        .cellListCellItemType {
          color: #55a0b9;
          fill: #55a0b9;
          padding-bottom: 5px;
        }
        .operationDisplay {
          float: left;
          padding-left: 20px;
          overflow: hidden;
          overflow-y: auto;
          width: -webkit-calc(100% - 670px);
          width: -moz-calc(100% - 670px);
          width: calc(100% - 670px);
        }
        .property {
          color: #aaaa96;
          font-size: 12px;
          padding-bottom: 5px;
        }
        .keyInfoDiv{
          font-family: 'Segoe UI', 'Open Sans', Verdana, Arial, Helvetica, sans-serif;
          margin-left: 10px;
        }
        #opName {
          padding-bottom: 15px;
        }
      `;
      document.head.appendChild(style);
    };
    
    // Initialize the app
    loadSOAApp();
    
    // Clean up function
    return () => {
      // Remove any script tags we added
      const scripts = document.querySelectorAll('script[src*="SOA/"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
      <div 
        id="soa-container" 
        style={{ height: '100%', width: '100%' }}
      >
        {loading && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100%', 
            fontSize: '16px',
            position: 'absolute',
            width: '100%',
            backgroundColor: 'white'
          }}>
            Loading Teamcenter SOA API Browser...
          </div>
        )}
      </div>
    </div>
  );
};

// Add a global window type declaration
declare global {
  interface Window {
    resizeList?: () => void;
    angular?: any;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SOAApiBrowser />
  </StrictMode>
);
