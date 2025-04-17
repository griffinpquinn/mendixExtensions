//The data var is loaded from structure.js

var libs = [];
var services = [];
var operations = [];

function searchlibs(name) {
    for(var i in libs){
        if(libs[i].name === name)
            return i;
    }
    return -1;
}

function searchServices(name){
    for(var i in services){
        if(services[i].name === name)
            return i;
    }
    return -1;
}

//service included because ops can share names
function searchOperations(name, service){
  if(service){
    for(var i in operations){
      if(operations[i].name === name && operations[i].service === service){
        return operations[i];
      }
    }
  }
  else{
    for(var i in operations){
      if(operations[i].name === name){
        return operations[i];
      }
    }
  }
}

var stack = [];
var primitives = {
  'bool': 'boolean',
  'char': 'char',
  'double': 'double',
  'float': 'float',
  'int': 'int',
  'void': 'null',
  'String': 'String',
  'boolean': 'boolean',
  'Date': 'Date',
  'IModelObject': 'IModelObject',
  'tag_t': 'tag_t'
}
function expandObject(obj) {
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    for (var i in obj) {
      if (!primitives[obj[i].type.replace('[]', '')]) {
        if (stack.indexOf(obj[i].type.replace('[]', '')) !== -1) {
          obj[i].recursive = true;
        }
        else {
          obj[i].properties = getNamespaceProp(obj[i].type.replace('[]', ''));
          stack.push(obj[i].type.replace('[]', ''));
          var update = expandObject(obj[i].properties);
          if(update){
            obj[i].properties = update;
          }
          stack.pop();
        }
      }
    }
  }
  else if(obj.indexOf(';') !== -1){
    var newObj = {};
    newObj.$ = true;//used to mark as a map - $ is not valid name in xml
    newObj.key = {};
    newObj.key.type = obj.split(';')[0];
    if(!primitives[obj.split(';')[0].replace('[]', '')]){
      newObj.key.properties = getNamespaceProp(obj.split(';')[0].replace('[]', ''));
      expandObject(newObj.key.properties);
    }
    newObj.key.description = 'Key';
    newObj.value = {};
    newObj.value.type = obj.split(';')[1];
    if(!primitives[obj.split(';')[1].replace('[]', '')]){
      newObj.value.properties = getNamespaceProp(obj.split(';')[1].replace('[]', ''));
      expandObject(newObj.value.properties);
    }
    newObj.value.description = 'Value';
    return newObj;
  }
}

function removeExtraComma(str, insert){
  var i = str.lastIndexOf(',');
  if(!insert){
    insert = '';
  }
  return str.slice(0, i) + insert + str.slice(i+1);
}

function insertCloseBracket(str){
  var i = str.lastIndexOf(',');
  return str.slice(0, i) + ']' + str.slice(i);
}

var path = [];
function displayObject(obj){
  if(obj.$){
    //special handling for maps
    switch(obj.key.properties) {
      case 'int':
      case 'float':
      case 'String':
        var returnString = 
          '{<br>'
        + '<div style="margin-left:10px;">'
        if(obj.value.properties){
          if(typeof obj.value.properties === 'string'){
            if(obj.value.type.indexOf('[]') !== -1){
              returnString +=
                  '<span>Sample' + obj.key.properties + 'Key</span>: "' + obj.value.properties + '[]"<br>';
            }
            else{
              returnString +=
                  '<span>Sample' + obj.key.properties + 'Key</span>: "' + obj.value.properties + '"<br>';
            }
          }
          //enum value type
          else if(Array.isArray(obj.value.properties)){
            if(obj.value.type.indexOf('[]') !== -1){
              returnString +=
                  '<span>Sample' + obj.key.properties + 'Key</span>: ' + JSON.stringify(obj.value.properties) + '<br>';
            }
            else{
              returnString +=
                  '<span>Sample' + obj.key.properties + 'Key</span>: "' + obj.value.properties[0] + '"<br>';
            }
          }
          //object value type
          else{
            if(obj.value.type.indexOf('[]') !== -1){
              returnString +=
                  '<span>Sample' + obj.key.properties + 'Key</span>:<br>'
                +  '[' + removeExtraComma( displayObject(obj.value.properties), ']' );
            }
            else{
              returnString +=
                  '<span>Sample' + obj.key.properties + 'Key</span>:<br>'
                +  removeExtraComma( displayObject(obj.value.properties) );
            }
          }
        }
        //primitive data type
        else{
          returnString +=
              '<span>Sample' + obj.key.properties + 'Key</span>: "' + obj.value.type + '"<br>';
        }
        returnString +=
          '</div>'
        + '},<br>'
        return returnString;;
      case 'IModelObject':
        var returnString =
          '[<br>'
        + '<div style="margin-left:10px;">'
        + '["SampleModelObjectKey1"],<br>';
        if(obj.value.properties){
          if(typeof obj.value.properties === 'string'){
            if(obj.value.type.indexOf('[]') !== -1){
              returnString += '["' + obj.value.properties + '[]"]<br>';
            }
            else{
              returnString += '["' + obj.value.properties + '"]<br>';
            }
          }
          else if(Array.isArray(obj.value.properties)){
            if(obj.value.type.indexOf('[]') !== -1){
              returnString += '[' + JSON.stringify(obj.value.properties) + ']<br>';
            }
            else{
              returnString += '["' + obj.value.properties[0] + '"]<br>';
            }
          }
          else{
            if(obj.value.type.indexOf('[]') !== -1){
              returnString +=
              '[[' + removeExtraComma( displayObject(obj.value.properties), ']]' );
            }
            else{
              returnString += '[' + removeExtraComma( displayObject(obj.value.properties) ) + ']';
            }
          }
        }
        else{
          returnString +=
              '["' + obj.value.type + '"]<br>';
        }
        returnString +=
            '</div>'
          + '],<br>';
        return returnString;
      default:
        console.log('Unknown key type' + obj.key.properties);
        return '';
    }
  }
  //only reached on initial call - request or response is a primitive
  else if(typeof obj !== 'object'){
    return '"'+obj+'",<br>';//leave extra comma because caller expects it
  }
  //only input or output is a enum - probably never happens
  else if(Array.isArray(obj)){
    return '"' + obj[0] + '"';
  }
  else{
    var returnString = 
      '{<br>'
    + '<div style="margin-left:10px;">'
    for(var i in obj){
      path.push(i);

      if(obj[i].properties){
        if(typeof obj[i].properties === 'string'){
          if(obj[i].type.indexOf('[]') !== -1){
            returnString +=
                '<span style="color:#006487;cursor:pointer;" onclick="showDocs(\''+ path.join('.') + '\')">' + i + '</span>: "' + obj[i].properties + '[]",<br>';
          }
          else{
            returnString +=
                '<span style="color:#006487;cursor:pointer;" onclick="showDocs(\''+ path.join('.') + '\')">' + i + '</span>: "' + obj[i].properties + '",<br>';
          }
          returnString +=
              '<div style="display:none" class="keyInfoDiv" id="'+path.join('.')+'" >'
            + '<b>Type</b>: ' + obj[i].type + '<br>'
            + '<b>Description</b>: ' + obj[i].description + '<br>'
            + '</div>'
        }
        else if ( Array.isArray(obj[i].properties) ){
          if(obj[i].type.indexOf('[]') !== -1){
            returnString +=
                '<span style="color:#006487;cursor:pointer;" onclick="showDocs(\''+ path.join('.') + '\')">' + i + '</span>: '
              + JSON.stringify(obj[i].properties) + ',<br>';
          }
          else{
            returnString +=
                '<span style="color:#006487;cursor:pointer;" onclick="showDocs(\''+ path.join('.') + '\')">' + i + '</span>: '
              + '"' + obj[i].properties[0] + '",<br>';
          }
          returnString +=
              '<div style="display:none" class="keyInfoDiv" id="'+path.join('.')+'" >'
            + '<b>Type</b>: ' + obj[i].type + '<br>'
            + '<b>Description</b>: ' + obj[i].description + '<br>';

          if ( Array.isArray(obj[i].properties) ){
            returnString += '<b>Enum values</b>: ' + JSON.stringify(obj[i].properties) + '<br>'
          }

          returnString += '</div>';

        }
        else{
          if(obj[i].type.indexOf('[]') !== -1){
            returnString +=
                '<span style="color:#006487;cursor:pointer;" onclick="showDocs(\''+ path.join('.') + '\')">' + i + '</span>:<br>'
              + '<div style="display:none" class="keyInfoDiv" id="'+path.join('.')+'" >'
              + '<b>Type</b>: ' + obj[i].type + '<br>'
              + '<b>Description</b>: ' + obj[i].description + '<br>'
              + '</div>'
              + '[' + insertCloseBracket( displayObject(obj[i].properties) );
          }
          else{
            returnString +=
                '<span style="color:#006487;cursor:pointer;" onclick="showDocs(\''+ path.join('.') + '\')">' + i + '</span>:<br>'
              + '<div style="display:none" class="keyInfoDiv" id="'+path.join('.')+'" >'
              + '<b>Type</b>: ' + obj[i].type + '<br>'
              + '<b>Description</b>: ' + obj[i].description + '<br>'
              + '</div>'
              +  displayObject(obj[i].properties);
          }
        }
      }
      else{
        returnString +=
            '<span style="color:#006487;cursor:pointer;" onclick="showDocs(\''+ path.join('.') + '\')">' + i + '</span>: "' + obj[i].type + '",<br>'
            + '<div style="display:none" class="keyInfoDiv" id="'+path.join('.')+'" >'
            + '<b>Type</b>: ' + obj[i].type + '<br>'
            + '<b>Description</b>: ' + obj[i].description + '<br>'
            + '</div>';
      }

      path.pop();
    }
    returnString = removeExtraComma(returnString);
    returnString +=
      '</div>'
    + '},<br>'
    return returnString;;
  }
}

function showDocs(id){
  if(document.getElementById(id).style.display === 'none'){
    document.getElementById(id).style.display = 'block'
  }
  else{
    document.getElementById(id).style.display = 'none';
  }
}

function getNamespaceProp(path) {
  var inits = path.split('::');
  var temp = data;
  while (inits.length > 0) {
    var index = inits.shift();
    temp = temp[index];
    if (!temp) {
      console.log('Property missing: ' + path);
      return null;
    }
  }
  return JSON.parse(JSON.stringify(temp));
}

function addOperation(lib, service, year, op, opObj, internal, template){

  year = year.slice(1).replace('_', '-');

  //lib
  if(searchlibs(lib) === -1){
    libs.push({
      name: lib,
      operations: [op]
    });
  }
  else {
    libs[searchlibs(lib)].operations.push(op);
  }
  //service
  if(searchServices(service + ' - ' + year) === -1){
    services.push({
      name: service + ' - ' + year,
      lib: lib,
      operations: [op]
    });
  }
  else{
    services[searchServices(service + ' - ' + year)].operations.push(op);
  }
  //Operation
  var url = lib + '-' + year + '-' + service + '/' + op;
  if(internal){
    var url = 'Internal-' + url;
  }

  var include = template + '.Soa.' + lib + '._' + year.replace('-', '_') + '.' + service + '.' + op;

  var newOp = {
    lib: lib,
    service: service + ' - ' + year,
    serviceStub: service,
    year: year,
    name: op,
    url: url,
    include: include,
    description: opObj.description,
    input: opObj.input,
    output: opObj.output
  }
  if(Array.isArray(opObj)){
    newOp.input = opObj;
    newOp.output = '';
  }

  // expand all objects immediately - much slower but makes object inputs and outputs searchable
  // expandObject(newOp.input);
  // expandObject(newOp.output);

  operations.push(newOp);
}

for(var template in data){
  for(var type in data[template]){
    if(type === 'Soa'){
      for(var lib in data[template][type]){
        if(lib !== 'Internal'){
          for(var year in data[template][type][lib]){
            for(var service in data[template][type][lib][year]){
              for(var op in data[template][type][lib][year][service]){
                if(op[0] === op[0].toLowerCase() && isNaN(op)){
                  var addOp = data[template][type][lib][year][service][op];
                  addOperation(lib, service, year, op, addOp, false, template);
                }
              }
            }
          }
        }
      }
      for(var lib in data[template][type].Internal){
        for(var year in data[template][type].Internal[lib]){
          for(var service in data[template][type].Internal[lib][year]){
            for(var op in data[template][type].Internal[lib][year][service]){
              if(op[0] === op[0].toLowerCase() && isNaN(op)){
                var addOp = data[template][type].Internal[lib][year][service][op];
                addOperation(lib, service, year, op, addOp, true, template);
              }
            }
          }
        }
      }
    }
  }
}

//for sorting objects by name
function nameCmp(a, b){
  if(a.name < b.name)
      return -1
  if(a.name > b.name)
      return 1;
  if(a.year && b.year){
    if(a.year < b.year)
      return -1;
    if(a.year > b.year)
      return 1;
  }
  return 0
}

//sort alphabetically by name
libs.sort(nameCmp);
services.sort(nameCmp);
operations.sort(nameCmp);

/////////////////////////////////  CSS Helper Stuff ///////////////////////////////

function resizeList(){
  document.getElementById('filterPanel').style.height = window.innerHeight - 45 + 'px';
  document.getElementById('opList').style.height = window.innerHeight - 55 + 'px';
  document.getElementById('operationDisplay').style.height = window.innerHeight - 10 + 'px';
  document.getElementById('libList').style.height = (window.innerHeight - 180) / 2 + 'px';
  document.getElementById('svcList').style.height = (window.innerHeight - 180) / 2 + 'px';
}
window.onresize = resizeList;

/////////////////////////////////  Angular Stuff  /////////////////////////////////

var soaModule = angular.module('DisplaySoa', []);

soaModule.controller('SoaController2', ['$scope',
function($scope){
    $scope.libs = libs;
    $scope.services = services;
    $scope.operations = operations;
    $scope.selectedLib = '';
    $scope.selectedService = '';
    $scope.selectedOperation = '';
    $scope.searchTerm = '';
    $scope.setSearchTerm = function(term){
      $scope.searchTerm = '';
    }
    $scope.setLib = function(lib){
      $scope.selectedLib = lib;
      $scope.updateHash('lib', lib);
      if($scope.selectedOperation && lib){
        if($scope.selectedOperation.lib !== lib){
          $scope.resetOperation();
        }
      }
    }
    $scope.setService = function(svc){
      $scope.selectedService = svc;
      $scope.updateHash('service', svc);
      if($scope.selectedOperation && svc){
        if($scope.selectedOperation.service !== svc){
          $scope.resetOperation();
        }
      }
    }
    $scope.libFilter = function(lib) {
      if($scope.selectedLib) {
        if($scope.selectedLib !== lib.name){
          return false;
        }
      }
      if($scope.selectedService){
        if(lib.name !== services[searchServices($scope.selectedService)].lib){
          return false;
        }
      }
      return true;
    };
    $scope.serviceFilter = function(service) {
      if($scope.selectedService) {
        if($scope.selectedService !== service.name){
          return false;
        }
      }
      if($scope.selectedLib) {
        // console.log(service);
        if(service.lib !== $scope.selectedLib){
          return false;
        }
      }
      return true;
    };
    $scope.opFilter = function(op) {
      if($scope.selectedLib) {
        if(op.lib !== $scope.selectedLib){
          return false;
        }
      }
      if($scope.selectedService) {
        if(op.service !== $scope.selectedService){
          return false;
        }
      }
      return true;
    }
    $scope.updateDisplay = function(operation) {
      $scope.selectedOperation = operation;
      expandObject(operation.input);
      expandObject(operation.output);
      document.getElementById('opName').innerHTML = operation.name;
      document.getElementById('opDesc').innerHTML = 'Description: <br><span style="color:#000">' + operation.description + '</span>';
      document.getElementById('opLib').innerHTML = 'Library: <span style="color:#000">' + operation.lib + '</span>';
      document.getElementById('opService').innerHTML = 'Service: <span style="color:#000">' + operation.serviceStub + '</span>';
      document.getElementById('opYear').innerHTML = 'Year: <span style="color:#000">' + operation.year + '</span>';
      document.getElementById('opUrl').innerHTML = 'Url: <span style="color:#000">' + operation.url + '</span>';
      document.getElementById('opInclude').innerHTML = 'Soa Dependency Inclusion: <span style="color:#000">"' + operation.include + '"</span>';
      var opInStr = removeExtraComma( displayObject(operation.input) );
      var opOutStr = removeExtraComma( displayObject(operation.output) );
      document.getElementById('opRequest').innerHTML = 'Request: <div style="color:#000;font-family:monospace;">' + opInStr + '</div>';
      document.getElementById('opResponse').innerHTML = 'Response: <div style="color:#000;font-family:monospace;">' + opOutStr + '</div>';
      $scope.updateHash('operation', operation.name);
    }
    $scope.resetOperation = function() {
      document.getElementById('opName').innerHTML = 'Name: ';
      document.getElementById('opDesc').innerHTML = 'Description: ';
      document.getElementById('opLib').innerHTML = 'Library: ';
      document.getElementById('opService').innerHTML = 'Service: ';
      document.getElementById('opYear').innerHTML = 'Year: ';
      document.getElementById('opUrl').innerHTML = 'Url: ';
      document.getElementById('opInclude').innerHTML = 'Soa Dependency Inclusion: ';
      document.getElementById('opRequest').innerHTML = 'Request: ';
      document.getElementById('opResponse').innerHTML = 'Response: ';
      $scope.selectedOperation = '';
      $scope.updateHash('operation', '');
    }
    $scope.updateHash = function(varName, newValue) {
      if(window.location.hash.substring(1)){
        var locations = window.location.hash.substring(1).split(';');
        var values = [];
        for(var i in locations){
          values.push(locations[i].split('=')[0]);
          values.push(locations[i].split('=')[1]);
        }
        var i = values.indexOf(varName);
        if(i !== -1){
          // console.log(values);
          values[i+1] = newValue;
          for(var i in locations){
            locations[i] = values[2*i] + '=' + values[2*i+1];
          }
          window.location.hash = '#' + locations.join(';');
        }
        else {
          window.location.hash += ';' + varName + '=' + newValue;
        }
      }
      else {
        window.location.hash = '#' + varName + '=' + newValue;
      }
    }
    //Returns user to specific state.  Only runs on initial module load
    if(window.location.hash){
      var locations = window.location.hash.substring(1).split(';');
      var operation = '';
      var service = '';
      var lib = '';
      for(var i in locations){
        var name = locations[i].split('=')[0];
        var value = locations[i].split('=')[1];
        if(name === 'lib'){
          lib = value;
        }
        if(name === 'service'){
          service = value;
        }
        if(name === 'operation'){
          operation = value;
        }
      }
      if(lib){
        $scope.selectedLib = lib;
      }
      if(service){
        $scope.selectedService = service;
      }
      if(operation){
        if(searchOperations(operation, service)){
            $scope.updateDisplay(searchOperations(operation, service));
        }
      }
    }
}]);