// index.js:

import { componentFramework as e } from "@mendix/component-framework";
import { ComponentApiBase as t, componentFramework as a } from "@mendix/component-framework";
import { getModelAccessWithComponentProxy as o } from "@mendix/model-access-sdk";
const m = {
  /**
   * UI related APIs
   */
  ui: {
    /**
     * API for showing message boxes
     */
    messageBoxes: e.getApi("mendix.MessageBoxApi"),
    /**
     * API for working with (document) tabs
     */
    tabs: e.getApi("mendix.TabApi"),
    /**
     * API for working with dockable panes
     */
    panes: e.getApi("mendix.DockablePaneApi"),
    /**
     * API for working with the Extensions menu
     */
    extensionsMenu: e.getApi("mendix.ExtensionsMenuApi")
  },
  /**
   * APIs for working with the app data, such as the app model and the files in the app directory
   */
  app: {
    /**
     * API for working with files in the app directory
     */
    files: e.getApi("mendix.AppFilesApi"),
    /**
     * APIs for working with the app model
     */
    model: {
      /**
       * API for working with domain models
       */
      domainModels: o(
        "mendix.DomainModelApi",
        "DomainModels$DomainModel"
      ),
      /**
       * API for working with pages
       */
      pages: o(
        "mendix.PageApi",
        "Pages$Page"
      ),
      /**
       * API for working with enumerations
       */
      enumerations: o(
        "mendix.EnumerationApi",
        "Enumerations$Enumeration"
      )
    }
  }
};
export {
  t as ComponentApiBase,
  a as componentFramework,
  m as studioPro
};


// index.d.ts:

/**
 * The result of the attempt to apply changes.
 */
declare interface ApplyChangesResult {
  /**
   * The context id of the operations.
   */
  contextId: string;
}

declare type ChangeSource = UnspecifiedSource | UndoRedoSource | WebModelSource;

/**
* Base class for every component API.
*
* @param EventMap An object type that represents the events that this API can emit (keys) and the shape of their event args (types).
*/
export declare abstract class ComponentApiBase<EventMap extends Record<string, object> = {}> extends EventManager<EventMap> implements IComponentApi<EventMap> {
  abstract get _apiId(): string;
}

export declare const componentFramework: IComponentFramework;

/**
* Event map for the Context Menu API.
* This map defines the events that the Context Menu API can emit and the data associated with each event.
*/
declare type ContextMenuApiEventMap = {
  /**
   * Event triggered when a context menu item is activated.
   * The event data contains the unique identifier of the activated menu item.
   * @event
   * @property {string} menuId - The unique identifier of the activated menu item.
   */
  contextMenuItemActivated: {
      menuId: string;
  };
  /**
   * Event triggered when text is loaded from the clipboard.
   * The event data contains the text that was loaded from the clipboard.
   * @event
   * @property {string} text - The text that was loaded from the clipboard.
   */
  textFromClipboardLoaded: {
      text: string;
  };
};

/**
* This operation creates an element.
* This must be paired with a 'insertElement' operation otherwise the element will not be created.
*/
declare interface CreateElementOperation<T extends Primitives.ElementBase = Primitives.ElementBase> extends OperationBase {
  type: "createElement";
  /**
   * The element to create.
   */
  element: T;
}

export declare namespace DataTypes {
  /**
   * See: {@link https://docs.mendix.com/refguide/data-types relevant section in reference guide}
   */
  export type DataType = UnknownType | VoidType | EmptyType | BooleanType | BinaryType | DecimalType | IntegerType | FloatType | DateTimeType | StringType | EnumerationType | EntityType;
  export type EntityType = ObjectType | ListType;
  /**
   * See: {@link https://docs.mendix.com/refguide/data-types relevant section in reference guide}
   */
  export interface DataTypeBase extends Primitives.ElementBase {
  }
  export interface UnknownType extends DataTypeBase {
      $Type: "DataTypes$UnknownType";
  }
  export interface VoidType extends DataTypeBase {
      $Type: "DataTypes$VoidType";
  }
  export interface EmptyType extends DataTypeBase {
      $Type: "DataTypes$EmptyType";
  }
  export interface BooleanType extends DataTypeBase {
      $Type: "DataTypes$BooleanType";
  }
  export interface BinaryType extends DataTypeBase {
      $Type: "DataTypes$BinaryType";
  }
  export interface DecimalType extends DataTypeBase {
      $Type: "DataTypes$DecimalType";
  }
  export interface IntegerType extends DataTypeBase {
      $Type: "DataTypes$IntegerType";
  }
  export interface FloatType extends DataTypeBase {
      $Type: "DataTypes$FloatType";
  }
  export interface DateTimeType extends DataTypeBase {
      $Type: "DataTypes$DateTimeType";
  }
  export interface StringType extends DataTypeBase {
      $Type: "DataTypes$StringType";
  }
  export interface EnumerationType extends DataTypeBase {
      $Type: "DataTypes$EnumerationType";
      enumeration: string;
  }
  export interface EntityTypeBase extends DataTypeBase {
      entity: string;
  }
  export interface ObjectType extends EntityTypeBase {
      $Type: "DataTypes$ObjectType";
  }
  export interface ListType extends EntityTypeBase {
      $Type: "DataTypes$ListType";
  }
}

declare type DisposeListener = () => void;

/**a Handle refering to a dockable pane instance registered with Studio Pro */
export declare type DockablePaneHandle = {
  /**The internal identifier Studio Pro uses to identify the dockable pane */
  id: string;
};

/**
* Dockable pane specific data required to register a dockable pane with Studio Pro
*/
export declare type DockablePaneInfo = {
  /**
   * The title that should be displayed for your dockable pane
   */
  title: string;
  /**The initial position where your dockable pane should be hosted */
  initialPosition: DockablePanePosition;
};

/**The initial position where a dockable pane can be hosted. Valid options are left, right and bottom */
export declare type DockablePanePosition = "left" | "right" | "bottom";

export declare namespace DomainModels {
  export type EntitySource = RemoteEntitySource | ViewEntitySource;
  export type RemoteEntitySource = QueryBasedRemoteEntitySource;
  export type ViewEntitySource = OqlViewEntitySource;
  export type GeneralizationBase = Generalization | NoGeneralization;
  export type ValueType = StoredValue | CalculatedValue | OqlViewValue | MappedValue;
  export type AttributeType = BinaryAttributeType | BooleanAttributeType | DateTimeAttributeType | EnumerationAttributeType | HashedStringAttributeType | StringAttributeType | NumericAttributeTypeBase;
  export type NumericAttributeTypeBase = DecimalAttributeTypeBase | IntegerAttributeTypeBase;
  export type DecimalAttributeTypeBase = DecimalAttributeType;
  export type IntegerAttributeTypeBase = IntegerAttributeType | LongAttributeType | AutoNumberAttributeType;
  /**
   * See: {@link https://docs.mendix.com/refguide/associations relevant section in reference guide}
   */
  export type AssociationBase = Association | CrossAssociation;
  export type AssociationSource = RemoteAssociationSource | OqlViewAssociationSource;
  export type RuleInfo = EqualsToRuleInfo | MaxLengthRuleInfo | RangeRuleInfo | RegExRuleInfo | RequiredRuleInfo | UniqueRuleInfo;
  export type EntityRef = DirectEntityRef | IndirectEntityRef;
  export type MemberRef = AttributeRef | AssociationRef;
  /**
   * See: {@link https://docs.mendix.com/refguide/domain-model relevant section in reference guide}
   */
  export interface DomainModel extends Primitives.UnitBase {
      $Type: "DomainModels$DomainModel";
      documentation: string;
      entities: Entity[];
      annotations: Annotation[];
      associations: Association[];
      crossAssociations: CrossAssociation[];
      addEntity(options: EntityCreationOptions): Promise<Entity>;
      getEntity(name: string): Entity;
      addAnnotation(): Promise<Annotation>;
      addAssociation(options: AssociationCreationOptions): Promise<Association>;
      getAssociation(name: string): Association;
      addCrossAssociation(options: CrossAssociationCreationOptions): Promise<CrossAssociation>;
      getCrossAssociation(name: string): CrossAssociation;
  }
  export interface EntityCreationOptions {
      name: string;
      attributes?: AttributeCreationOptions[];
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/entities relevant section in reference guide}
   */
  export interface Entity extends Primitives.ElementBase {
      $Type: "DomainModels$Entity";
      $CreationOptions: EntityCreationOptions;
      name: string;
      dataStorageGuid: string;
      location: Primitives.Location;
      documentation: string;
      generalization: GeneralizationBase;
      attributes: Attribute[];
      validationRules: ValidationRule[];
      eventHandlers: EventHandler[];
      indexes: Index[];
      accessRules: AccessRule[];
      image: string | null;
      imageData: any;
      source: EntitySource | null;
      getContainer(): DomainModel;
      delete(): void;
      addAttribute(options: AttributeCreationOptions): Promise<Attribute>;
      getAttribute(name: string): Attribute;
      addValidationRule(): Promise<ValidationRule>;
      addEventHandler(): Promise<EventHandler>;
      addIndex(): Promise<Index>;
      addAccessRule(): Promise<AccessRule>;
  }
  export interface EntitySourceBase extends Primitives.ElementBase {
      getContainer(): Entity;
      delete(): void;
  }
  export interface RemoteEntitySourceBase extends EntitySourceBase {
  }
  export interface QueryBasedRemoteEntitySource extends RemoteEntitySourceBase {
  }
  export interface ViewEntitySourceBase extends EntitySourceBase {
  }
  export interface OqlViewEntitySource extends ViewEntitySourceBase {
      $Type: "DomainModels$OqlViewEntitySource";
      sourceDocument: string | null;
  }
  export interface GeneralizationBaseBase extends Primitives.ElementBase {
      getContainer(): Entity;
      delete(): void;
  }
  export interface Generalization extends GeneralizationBaseBase {
      $Type: "DomainModels$Generalization";
      generalization: string;
  }
  export interface NoGeneralization extends GeneralizationBaseBase {
      $Type: "DomainModels$NoGeneralization";
      hasChangedDate: boolean;
      hasCreatedDate: boolean;
      hasOwner: boolean;
      hasChangedBy: boolean;
      persistable: boolean;
  }
  export interface EntityKey extends Primitives.ElementBase {
      $Type: "DomainModels$EntityKey";
      parts: EntityKeyPart[];
      addEntityKeyPart(options: EntityKeyPartCreationOptions): Promise<EntityKeyPart>;
      getEntityKeyPart(name: string): EntityKeyPart;
  }
  export interface EntityKeyPartCreationOptions {
      name: string;
  }
  export interface EntityKeyPart extends Primitives.ElementBase {
      $Type: "DomainModels$EntityKeyPart";
      $CreationOptions: EntityKeyPartCreationOptions;
      name: string;
      type: AttributeType;
      getContainer(): EntityKey;
      delete(): void;
  }
  export interface RemoteEntitySourceDocument extends Primitives.UnitBase {
      description: string;
      catalogUrl: string;
      icon: any;
      metadata: string;
      metadataUrl: string;
      serviceName: string;
      version: string;
      endpointId: string;
      minimumMxVersion: string;
      recommendedMxVersion: string;
      applicationId: string;
      environmentType: EnvironmentType;
      metadataHash: string;
      validated: boolean;
      validatedEntities: string[];
      name: string;
      documentation: string;
  }
  export interface ViewEntitySourceDocumentCreationOptions {
      name: string;
  }
  export interface ViewEntitySourceDocument extends Primitives.UnitBase {
      $Type: "DomainModels$ViewEntitySourceDocument";
      $CreationOptions: ViewEntitySourceDocumentCreationOptions;
      name: string;
      documentation: string;
  }
  export interface AttributeCreationOptions {
      name: string;
      type: "Binary" | "Boolean" | "DateTime" | "HashedString" | "String" | "Decimal" | "Integer" | "Long" | "AutoNumber";
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/attributes relevant section in reference guide}
   */
  export interface Attribute extends Primitives.ElementBase {
      $Type: "DomainModels$Attribute";
      $CreationOptions: AttributeCreationOptions;
      name: string;
      dataStorageGuid: string;
      type: AttributeType;
      documentation: string;
      value: ValueType;
      getContainer(): Entity;
      delete(): void;
  }
  export interface ValueTypeBase extends Primitives.ElementBase {
      getContainer(): Attribute;
      delete(): void;
  }
  export interface StoredValue extends ValueTypeBase {
      $Type: "DomainModels$StoredValue";
      defaultValue: string;
  }
  export interface CalculatedValue extends ValueTypeBase {
      $Type: "DomainModels$CalculatedValue";
      microflow: string | null;
      passEntity: boolean;
  }
  export interface OqlViewValue extends ValueTypeBase {
      $Type: "DomainModels$OqlViewValue";
      reference: string;
  }
  export interface MappedValue extends ValueTypeBase {
      defaultValueDesignTime: string;
  }
  export interface AttributeTypeBase extends Primitives.ElementBase {
  }
  export interface BinaryAttributeType extends AttributeTypeBase {
      $Type: "DomainModels$BinaryAttributeType";
  }
  export interface BooleanAttributeType extends AttributeTypeBase {
      $Type: "DomainModels$BooleanAttributeType";
  }
  export interface DateTimeAttributeType extends AttributeTypeBase {
      $Type: "DomainModels$DateTimeAttributeType";
      localizeDate: boolean;
  }
  export interface EnumerationAttributeType extends AttributeTypeBase {
      $Type: "DomainModels$EnumerationAttributeType";
      enumeration: string;
  }
  export interface HashedStringAttributeType extends AttributeTypeBase {
      $Type: "DomainModels$HashedStringAttributeType";
  }
  export interface StringAttributeType extends AttributeTypeBase {
      $Type: "DomainModels$StringAttributeType";
      length: number;
  }
  export interface NumericAttributeTypeBaseBase extends AttributeTypeBase {
  }
  export interface DecimalAttributeTypeBaseBase extends NumericAttributeTypeBaseBase {
  }
  export interface DecimalAttributeType extends DecimalAttributeTypeBaseBase {
      $Type: "DomainModels$DecimalAttributeType";
  }
  export interface IntegerAttributeTypeBaseBase extends NumericAttributeTypeBaseBase {
  }
  export interface IntegerAttributeType extends IntegerAttributeTypeBaseBase {
      $Type: "DomainModels$IntegerAttributeType";
  }
  export interface LongAttributeType extends IntegerAttributeTypeBaseBase {
      $Type: "DomainModels$LongAttributeType";
  }
  export interface AutoNumberAttributeType extends IntegerAttributeTypeBaseBase {
      $Type: "DomainModels$AutoNumberAttributeType";
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/associations relevant section in reference guide}
   */
  export interface AssociationBaseBase extends Primitives.ElementBase {
      name: string;
      dataStorageGuid: string;
      type: AssociationType;
      owner: AssociationOwner;
      storageFormat: AssociationStorage;
      deleteBehavior: AssociationDeleteBehavior;
      parent: string;
      documentation: string;
      source: AssociationSource | null;
  }
  export interface AssociationCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/associations relevant section in reference guide}
   */
  export interface Association extends AssociationBaseBase {
      $Type: "DomainModels$Association";
      $CreationOptions: AssociationCreationOptions;
      child: string;
      parentConnection: Primitives.Location;
      childConnection: Primitives.Location;
      getContainer(): DomainModel;
      delete(): void;
  }
  export interface CrossAssociationCreationOptions {
      name: string;
  }
  export interface CrossAssociation extends AssociationBaseBase {
      $Type: "DomainModels$CrossAssociation";
      $CreationOptions: CrossAssociationCreationOptions;
      child: string;
      getContainer(): DomainModel;
      delete(): void;
  }
  export interface AssociationSourceBase extends Primitives.ElementBase {
      getContainer(): AssociationBase;
      delete(): void;
  }
  export interface RemoteAssociationSource extends AssociationSourceBase {
  }
  export interface OqlViewAssociationSource extends AssociationSourceBase {
      $Type: "DomainModels$OqlViewAssociationSource";
      reference: string;
  }
  export interface AssociationDeleteBehavior extends Primitives.ElementBase {
      $Type: "DomainModels$AssociationDeleteBehavior";
      parentDeleteBehavior: DeletingBehavior;
      childDeleteBehavior: DeletingBehavior;
      parentErrorMessage: Texts.Text | null;
      childErrorMessage: Texts.Text | null;
      getContainer(): AssociationBase;
      delete(): void;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/annotations relevant section in reference guide}
   */
  export interface Annotation extends Primitives.ElementBase {
      $Type: "DomainModels$Annotation";
      caption: string;
      location: Primitives.Location;
      width: number;
      getContainer(): DomainModel;
      delete(): void;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/access-rules relevant section in reference guide}
   */
  export interface AccessRule extends Primitives.ElementBase {
      $Type: "DomainModels$AccessRule";
      memberAccesses: MemberAccess[];
      moduleRoles: string[];
      documentation: string;
      allowCreate: boolean;
      allowDelete: boolean;
      defaultMemberAccessRights: MemberAccessRights;
      xPathConstraintCaption: string;
      xPathConstraint: string | null;
      addMemberAccess(): Promise<MemberAccess>;
  }
  export interface MemberAccess extends Primitives.ElementBase {
      $Type: "DomainModels$MemberAccess";
      attribute: string | null;
      association: string | null;
      accessRights: MemberAccessRights;
      getContainer(): AccessRule;
      delete(): void;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/event-handlers relevant section in reference guide}
   */
  export interface EventHandler extends Primitives.ElementBase {
      $Type: "DomainModels$EventHandler";
      moment: ActionMoment;
      event: EventType;
      microflow: string | null;
      raiseErrorOnFalse: boolean;
      passEventObject: boolean;
      getContainer(): Entity;
      delete(): void;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/indexes relevant section in reference guide}
   */
  export interface Index extends Primitives.ElementBase {
      $Type: "DomainModels$Index";
      dataStorageGuid: string;
      attributes: IndexedAttribute[];
      includeInOffline: boolean;
      getContainer(): Entity;
      delete(): void;
      addIndexedAttribute(): Promise<IndexedAttribute>;
  }
  export interface IndexedAttribute extends Primitives.ElementBase {
      $Type: "DomainModels$IndexedAttribute";
      type: IndexedAttributeType;
      attribute: string | null;
      ascending: boolean;
      getContainer(): Index;
      delete(): void;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/validation-rules relevant section in reference guide}
   */
  export interface ValidationRule extends Primitives.ElementBase {
      $Type: "DomainModels$ValidationRule";
      attribute: string;
      errorMessage: Texts.Text;
      ruleInfo: RuleInfo;
      getContainer(): Entity;
      delete(): void;
  }
  export interface RuleInfoBase extends Primitives.ElementBase {
      getContainer(): ValidationRule;
      delete(): void;
  }
  export interface EqualsToRuleInfo extends RuleInfoBase {
      $Type: "DomainModels$EqualsToRuleInfo";
      useValue: boolean;
      equalsToValue: string;
      equalsToAttribute: string | null;
  }
  export interface MaxLengthRuleInfo extends RuleInfoBase {
      $Type: "DomainModels$MaxLengthRuleInfo";
      maxLength: number;
  }
  export interface RangeRuleInfo extends RuleInfoBase {
      $Type: "DomainModels$RangeRuleInfo";
      typeOfRange: RangeType;
      useMinValue: boolean;
      useMaxValue: boolean;
      minValue: string;
      maxValue: string;
      minAttribute: string | null;
      maxAttribute: string | null;
  }
  export interface RegExRuleInfo extends RuleInfoBase {
      $Type: "DomainModels$RegExRuleInfo";
      regularExpression: string | null;
  }
  export interface RequiredRuleInfo extends RuleInfoBase {
      $Type: "DomainModels$RequiredRuleInfo";
  }
  export interface UniqueRuleInfo extends RuleInfoBase {
      $Type: "DomainModels$UniqueRuleInfo";
  }
  export interface EntityRefBase extends Primitives.ElementBase {
  }
  export interface DirectEntityRef extends EntityRefBase {
      $Type: "DomainModels$DirectEntityRef";
      entity: string;
  }
  export interface IndirectEntityRef extends EntityRefBase {
      $Type: "DomainModels$IndirectEntityRef";
      steps: EntityRefStep[];
      addEntityRefStep(): Promise<EntityRefStep>;
  }
  export interface EntityRefStep extends Primitives.ElementBase {
      $Type: "DomainModels$EntityRefStep";
      association: string;
      destinationEntity: string;
      getContainer(): IndirectEntityRef;
      delete(): void;
  }
  export interface MemberRefBase extends Primitives.ElementBase {
      entityRef: IndirectEntityRef | null;
  }
  export interface AttributeRef extends MemberRefBase {
      $Type: "DomainModels$AttributeRef";
      attribute: string;
  }
  export interface AssociationRef extends MemberRefBase {
      $Type: "DomainModels$AssociationRef";
      association: string;
  }
  export type EnvironmentType = "Production" | "Sandbox" | "NonProduction" | "Unknown";
  export type AssociationType = "Reference" | "ReferenceSet";
  export type AssociationOwner = "Default" | "Both";
  export type AssociationStorage = "Table" | "Column";
  export type DeletingBehavior = "DeleteMeAndReferences" | "DeleteMeButKeepReferences" | "DeleteMeIfNoReferences";
  export type Navigability = "BothDirections" | "ParentToChild";
  export type MemberAccessRights = "None" | "ReadOnly" | "ReadWrite";
  export type ActionMoment = "Before" | "After";
  export type EventType = "Create" | "Commit" | "Delete" | "RollBack";
  export type IndexedAttributeType = "Normal" | "CreatedDate" | "ChangedDate";
  export type RangeType = "GreaterThanOrEqualTo" | "SmallerThanOrEqualTo" | "Between";
}

declare interface ElementMetadata {
  helpers: {
      [typeSuffix: string]: {
          type: string;
          parentPropertyName: string;
      };
  };
}

declare interface ElementMetadataMap {
  [elementType: string]: ElementMetadata;
}

export declare namespace Enumerations {
  export interface EnumerationCreationOptions {
      name: string;
      values: EnumerationValueCreationOptions[];
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/enumerations relevant section in reference guide}
   */
  export interface Enumeration extends Primitives.UnitBase {
      $Type: "Enumerations$Enumeration";
      $CreationOptions: EnumerationCreationOptions;
      values: EnumerationValue[];
      remoteSource: RemoteEnumerationSource | null;
      name: string;
      documentation: string;
      addEnumerationValue(options: EnumerationValueCreationOptions): Promise<EnumerationValue>;
      getEnumerationValue(name: string): EnumerationValue;
  }
  export interface EnumerationValueCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/enumerations relevant section in reference guide}
   */
  export interface EnumerationValue extends Primitives.ElementBase {
      $Type: "Enumerations$EnumerationValue";
      $CreationOptions: EnumerationValueCreationOptions;
      name: string;
      caption: Texts.Text;
      image: string | null;
      remoteValue: RemoteEnumerationValue | null;
      getContainer(): Enumeration;
      delete(): void;
  }
  export interface Condition extends Primitives.ElementBase {
      $Type: "Enumerations$Condition";
      attributeValue: string;
      editableVisible: boolean;
  }
  export interface RemoteEnumerationSource extends Primitives.ElementBase {
      getContainer(): Enumeration;
      delete(): void;
  }
  export interface RemoteEnumerationValue extends Primitives.ElementBase {
      getContainer(): EnumerationValue;
      delete(): void;
  }
}

export declare type ErrorDetails = {
  message: string;
  stack: string[];
};

declare type EventHandler<EventArgsMap extends Record<string, object>, K extends keyof EventArgsMap> = (eventArgs: EventArgsMap[K]) => void | Promise<void>;

/**
* Helper class that can be inheritted from for event management. It also has a listener for all events that are emitted.
*/
declare abstract class EventManager<EventArgsMap extends Record<string, object>> implements IEventManager<EventArgsMap> {
  private readonly listeners;
  onEmitEvent?: (eventType: string, eventArgs: object) => unknown;
  addEventListener<K extends keyof EventArgsMap>(eventType: K, listener: EventHandler<EventArgsMap, K>): DisposeListener;
  removeEventListener<K extends keyof EventArgsMap>(eventType: K, listener: EventHandler<EventArgsMap, K>): void;
  protected emitEvent<K extends keyof EventArgsMap>(eventType: K, eventArgs: EventArgsMap[K]): void;
}

/**
* The menu api allows extensions to start listening to the events this event map provides.
*/
declare type ExtensionsMenuApiEventMap = {
  /**
   * This event will trigger when a menu gets activated, passing the menu ID as data.
   */
  menuItemActivated: {
      menuId: string;
  };
};

/**
* API for working with the files in the app directory.
*/
export declare interface IAppFilesApi extends IComponentApi {
  _apiId: "mendix.AppFilesApi";
  /**
   * Retrieves the content of a file at the specified path.
   *
   * @param path The relative path of the file to retrieve.
   * @returns A promise that resolves with the content of the file.
   */
  getFile(path: string): Promise<string>;
  /**
   * Uploads content to a file at the specified path.
   *
   * @param path The relative path of the file to upload content to.
   * @param content The content to upload to the file.
   * @returns A promise that resolves when the file has been uploaded.
   */
  putFile(path: string, content: string): Promise<void>;
  /**
   * Deletes the file at the specified path.
   *
   * @param path The relative path of the file to delete.
   * @returns A promise that resolves when the file has been deleted.
   */
  deleteFile(path: string): Promise<void>;
}

/**
* Interface for Clipboard API.
*/
export declare interface IClipboardApi extends IComponentApi {
  /**
   * Unique identifier for the Clipboard API.
   */
  _apiId: "mendix.ClipboardApi";
  /**
   * Writes the given text to the clipboard.
   * @param text - The text to be written to the clipboard.
   */
  write(text: string): void;
  /**
   * Reads the text from the clipboard.
   * @returns A promise that resolves to the text read from the clipboard.
   */
  read(): Promise<string>;
  /**
   * Checks if the clipboard is empty.
   * @returns A promise that resolves to a boolean indicating whether the clipboard is empty.
   */
  isEmpty(): Promise<boolean>;
}

/**
* Interface that a component should implement, so its lifecycle method can be called by the framework.
*/
export declare interface IComponent {
  /**
   * Called when the component is initially loaded.
   */
  loaded?(): Promise<void>;
}

/**
* Every component's API (optional) must implement this interface, done by inheriting from {@link ComponentApiBase}.
*
* This interface exists because APIs can be distributed by an interface alone (that inherits from this one), where the inplementation
* can live in another webcontext and is thus unknown.
*/
export declare interface IComponentApi<TEventMap extends Record<string, object> = {}> extends IEventManager<TEventMap> {
  /**
   * Unique identifier that can be used to register or retrieve a specific API.
   *
   * Example: mendix.EditorsAPI, mycompany.MyFunkyAPI
   */
  readonly _apiId: string;
}

/**
* The component framework allows TypeScript components to communicate using well-defined APIs.
*
* APIs are TypeScript interfaces that meet certain requirements:
*
* - It extends ComponentApiBase (and thus implements IComponentApi),
* - It only contains methods that return Promises, of which both the parameters and the return type are serializable values,
* - It can raise events, of which the event args are serializable.
*/
export declare interface IComponentFramework {
  /**
   * Obtain an implementation of the API with the specified API ID.
   *
   * The implementation can either be a "local" object (same web context), or a facade for a remote object (different web context).
   *
   * The component framework ensures that method calls and events are propagated to remote objects.
   *
   * @param apiId The unique identifier of the API.
   */
  getApi<TApi extends IComponentApi>(apiId: TApi["_apiId"]): TApi;
  /**
   * Register an API with the component framework.
   * This allows other components to consume this API.
   *
   * If this is the singleton host, other remote component frameworks will be able to remotely call this API.
   *
   * @param apiId The unique identifier of the API.
   * @param componentApi An object implementing the API.
   */
  registerApi<TApi extends IComponentApi>(apiId: TApi["_apiId"], componentApi: TApi): void;
}

/**
* Interface for Context Menu API.
*/
export declare interface IContextMenuApi extends IComponentApi<ContextMenuApiEventMap> {
  /**
   * Unique identifier for the Context Menu API.
   */
  _apiId: "mendix.ContextMenuApi";
  /**
   * Shows the context menu with the given menu items at the specified point.
   * @param menuItems - The menu items to be displayed in the context menu.
   * @param point - The point where the context menu should be displayed.
   */
  showContextMenu(menuItems: Menu[], point?: Point): void;
}

/**
* API for working with dockable panes in Studio Pro.
*/
export declare interface IDockablePaneApi extends IComponentApi {
  _apiId: "mendix.DockablePaneApi";
  /**
   * Opens a dockable pane by passing a pane handle received from the register method.
   *
   * @param handle a handle to the pane that was registered.
   */
  open(handle: DockablePaneHandle): Promise<void>;
  /**
   * Closes a dockable pane by passing a pane handle received from the register method.
   *
   * @param handle a handle to the pane that was registered.
   */
  close(handle: DockablePaneHandle): Promise<void>;
  /**
   * Registers a new dockable pane with Studio Pro.
   *
   * @param paneInfo information like title and initial position required by Studio Pro
   * to register the pane
   * @param uiSpec UI specification of the UI to show inside the pane
   * @returns a pane handle which can be used to interact with the pane
   * via @see IDockablePaneApi.open and @see IDockablePaneApi.close methods
   */
  register(paneInfo: DockablePaneInfo, uiSpec: UISpec): Promise<DockablePaneHandle>;
}

export declare interface IDomainModelApi extends IModelComponentApiBase<DomainModels.DomainModel> {
  _apiId: "mendix.DomainModelApi";
}

export declare interface IEnumerationApi extends IModelComponentApiBase<Enumerations.Enumeration> {
  _apiId: "mendix.EnumerationApi";
  createEnumeration(containerId: string, options?: Enumerations.EnumerationCreationOptions): Promise<string>;
}

export declare interface IErrorReportingApi extends IComponentApi {
  _apiId: "mendix.ErrorReportingApi";
  reportUnhandledError(error: ErrorDetails): void;
}

declare interface IEventManager<EventArgsMap extends Record<string, object>> {
  addEventListener<K extends keyof EventArgsMap>(eventType: K, listener: EventHandler<EventArgsMap, K>): DisposeListener;
  removeEventListener<K extends keyof EventArgsMap>(eventType: K, listener: EventHandler<EventArgsMap, K>): void;
}

/**
* API for working with the Extensions menu in Studio Pro.
*/
export declare interface IExtensionsMenuApi extends IComponentApi<ExtensionsMenuApiEventMap> {
  _apiId: "mendix.ExtensionsMenuApi";
  /**
   * Adds a menu item to the Extensions menu in the main menu bar of Studio Pro.
   *
   * @param menuItem The menu item to add.
   */
  add(menuItem: Menu): Promise<void>;
  /**
   * Updates a menu item in the Extensions menu in the main menu bar of Studio Pro.
   *
   * @param menuId The ID of the menu to be updated.
   * @param state The menu item state to update (caption and/or enabled).
   */
  update(menuId: string, state: {
      caption?: string;
      enabled?: boolean;
  }): Promise<void>;
}

export declare interface ILoggerApi extends IComponentApi {
  _apiId: "mendix.LoggerApi";
  log(level: LogLevel, loggerName: string, message: string, error?: ErrorDetails): void;
}

/**
* API for showing message boxes
*/
export declare interface IMessageBoxApi extends IComponentApi {
  _apiId: "mendix.MessageBoxApi";
  /**
   * Shows a message box with the given type, message and optional details.
   *
   * @param type The type of message box. One of "info", "warning" or "error".
   * @param message The message to show in the message box.
   * @param details The optional details to show in the message box.
   * @returns A promise that resolves when the message box is closed.
   */
  show(type: "info" | "warning" | "error", message: string, details?: string): Promise<void>;
}

declare interface IModelAccess<TUnit extends Primitives.UnitBase> {
  getUnitsInfo(): Promise<ReadonlyArray<Readonly<Primitives.UnitInfo>>>;
  getModules(): Promise<ReadonlyArray<Readonly<Primitives.UnitInfo>>>;
  loadAll(filter: (u: Primitives.UnitInfo) => boolean, maxUnitsToLoad?: number): Promise<TUnit[]>;
  save(unit: TUnit): Promise<void>;
  create<TElement extends Primitives.ElementBase>(type: TElement["$Type"], creationOptions?: TElement["$CreationOptions"]): Promise<TElement>;
  deleteUnit(unitId: string): Promise<void>;
}

declare interface IModelComponentApiBase<TUnit extends Primitives.UnitBase, TEventMap extends {} = {}> extends IComponentApi<TEventMap> {
  loadUnits(type: TUnit["$Type"], unitIds: string[]): Promise<TUnit[]>;
  applyChanges(operations: Operation[]): Promise<ApplyChangesResult>;
  createElement<TElement extends Primitives.ElementBase>(type: TElement["$Type"], options?: TElement["$CreationOptions"]): Promise<TElement>;
  createUnit(type: TUnit["$Type"], containerId: string, options?: TUnit["$CreationOptions"]): Promise<TUnit>;
  deleteUnit(unitId: string): Promise<void>;
  getElementMetadata(): Promise<ElementMetadataMap>;
}

/**
* This operation insert an element into an element/unit.
*/
declare interface InsertElementOperation extends OperationBase {
  type: "insertElement";
  /**
   * The id of the unit that will contain the to-be-inserted element.
   */
  unitId: string;
  /**
   * The id of the parent that will contain the to-be-inserted element.
   */
  targetId: string;
  /**
   * The property name in which the to-be-inserted element will be inserted.
   */
  propertyName: string;
  /**
   * The array index in which the to-be-inserted element will be inserted.
   */
  index: number;
  /**
   * The id of the to-be-inserted element.
   */
  elementId: string;
}

export declare interface IPageApi extends IModelComponentApiBase<Pages.Page> {
  _apiId: "mendix.PageApi";
}

/**
* Interface for Problems API
*/
export declare interface IProblemsApi extends IComponentApi<ProblemsApiEventMap> {
  /**
   * Unique identifier for the Problems API.
   */
  _apiId: "mendix.ProblemsApi";
}

export declare interface IProjectApi extends IComponentApi<ProjectManagerEventMap> {
  _apiId: "mendix.ProjectApi";
}

/**
* API for working with (document) tabs in the working area of Studio Pro
*/
export declare interface ITabApi extends IComponentApi {
  _apiId: "mendix.TabApi";
  /**
   * Opens a new tab in the working area of Studio Pro.
   *
   * @param tabInfo Information about the tab to be opened
   * @param uiSpec UI specification of the UI to show inside the tab
   * @returns A handle to the tab that can be used to close it
   */
  open(tabInfo: TabInfo, uiSpec: UISpec): Promise<TabHandle>;
  /**
   * Closes the tab with the given handle.
   *
   * @param tabHandle The handle of the tab to be closed
   */
  close(tabHandle: TabHandle): Promise<void>;
}

declare type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal";

export declare type Menu = {
  /**
   * The display text of the menu.
   */
  caption: string;
  /**
   * This ID should be unique and not empty. When the menu gets clicked, the message 'menuItemActivated' with this menuId as data is sent back to the extension.
   */
  menuId: string;
  /**
   * If not provided, the menu is enabled by default. Its enabled state can be updated with the 'update' call.
   */
  enabled?: boolean;
  /**
   * If true, a separator will be placed under this menu in the UI.
   */
  hasSeparatorAfter?: boolean;
  /**
   * If true, a separator will be placed above this menu in the UI.
   */
  hasSeparatorBefore?: boolean;
  /**
   * The children menus of this menu. They can also be parents of other menus.
   */
  subMenus?: Menu[];
};

declare type ModelAccessWithComponent<TApi extends IModelComponentApiBase<TUnit>, TUnit extends Primitives.UnitBase> = IModelAccess<TUnit> & Omit<TApi, keyof IModelComponentApiBase<TUnit>>;

/**
* The operation to apply to the model.
*/
declare type Operation = CreateElementOperation | RemoveElementOperation | InsertElementOperation | SetPropertyOperation;

declare interface OperationBase {
  /**
   * The type of the operation.
   */
  type: string;
}

export declare namespace Pages {
  /**
   * See: {@link https://docs.mendix.com/refguide/pages relevant section in reference guide}
   */
  export type FormBase = Page | Layout | TemplateFormBase | Snippet;
  export type LayoutContent = WebLayoutContent | NativeLayoutContent;
  /**
   * See: {@link https://docs.mendix.com/refguide/pages relevant section in reference guide}
   */
  export type Widget = Placeholder | TemplatePlaceholder | LoginTextBox | ValidationMessage | ConditionallyVisibleWidget | Header | MenuWidget | ScrollContainer | SnippetCallWidget;
  export type TemplateFormBase = BuildingBlock | PageTemplate;
  export type TemplateType = RegularPageTemplateType | EditPageTemplateType | SelectPageTemplateType | WorkflowTemplateType;
  export type ClientAction = NoClientAction | PageClientAction | MicroflowClientAction | CallNanoflowClientAction | SignOutClientAction | SaveChangesClientAction | CancelChangesClientAction | ClosePageClientAction | SyncClientAction | OpenLinkClientAction | DeleteClientAction | CreateObjectClientAction | CallWorkflowClientAction | OpenUserTaskClientAction | OpenWorkflowClientAction | SetTaskOutcomeClientAction;
  export type AbstractDesignPropertyValue = OptionDesignPropertyValue | ToggleDesignPropertyValue | CustomDesignPropertyValue | CompoundDesignPropertyValue;
  export type ConditionallyVisibleWidget = Label | StaticImageViewer | DivContainer | ConditionallyEditableWidget | Table | EntityWidget | Button | DynamicText | GroupBox | LayoutGrid | NavigationList | TabContainer | Title;
  export type TextWidget = TextBox | TextArea;
  export type AttributeWidget = CheckBox | RadioButtonGroup | AttributeWidgetWithPlaceholder | DropDown;
  export type AttributeWidgetWithPlaceholder = DatePicker | TextWidget;
  export type LoginTextBox = LoginIdTextBox | PasswordTextBox;
  /**
   * See: {@link https://docs.mendix.com/refguide/button-widgets relevant section in reference guide}
   */
  export type Button = LoginButton | ActionButton | DropDownButton | SidebarToggleButton;
  export type MemberWidget = AttributeWidget | AssociationWidget;
  export type InputWidget = MemberWidget | FileManager | ImageUploader;
  export type ConditionallyEditableWidget = InputWidget;
  export type ConditionalSettings = ConditionalVisibilitySettings | ConditionalEditabilitySettings;
  /**
   * See: {@link https://docs.mendix.com/refguide/data-sources relevant section in reference guide}
   */
  export type DataSource = EntityPathSource | MicroflowSource | NanoflowSource | ListenTargetSource;
  export type EntityWidget = ListenTargetWidget | DataView | DynamicImageViewer;
  export type EntityPathSource = AssociationSource | DataViewSource | SortableEntityPathSource | ImageViewerSource;
  export type ControlBarItem = ControlBarButton | SearchField;
  export type ListenTargetWidget = ListView | Grid;
  export type SortableEntityPathSource = XPathSourceBase | GridBaseSource;
  export type XPathSourceBase = ListViewXPathSource;
  export type Grid = ColumnGrid | TemplateGrid;
  export type SingleSearchField = ComparisonSearchField | DropDownSearchField;
  export type GridBaseSource = GridXPathSource | ReferenceSetSource;
  export type ColumnGrid = DataGrid | ReferenceSetSelector;
  export type GridControlBarButton = DataGridAddButton | DataGridExportToCSVButton | DataGridExportToExcelButton | DataGridRemoveButton | GridActionButton | GridDeselectAllButton | GridNewButton | GridSearchButton | GridSelectAllButton | SelectButton;
  export type ActionItem = DropDownButtonItem | NavigationListItem;
  /**
   * See: {@link https://docs.mendix.com/refguide/image relevant section in reference guide}
   */
  export type Icon = GlyphIcon | ImageIcon | IconCollectionIcon;
  export type ControlBar = GridControlBar | SearchBar;
  export type ControlBarButton = GridControlBarButton;
  export type AssociationWidget = InputReferenceSetSelector | ReferenceSelector;
  /**
   * See: {@link https://docs.mendix.com/refguide/menu-widgets relevant section in reference guide}
   */
  export type MenuWidget = MenuBar | NavigationTree | SimpleMenuBar;
  export type MenuSource = MenuDocumentSource | NavigationSource;
  export type SearchField = RangeSearchField | SingleSearchField;
  export type SelectorSource = SelectorXPathSource | SelectorMicroflowSource;
  export type WorkflowTemplateType = UserTaskTemplateType | WorkflowOverviewTemplateType;
  /**
   * See: {@link https://docs.mendix.com/refguide/pages relevant section in reference guide}
   */
  export interface FormBaseBase extends Primitives.UnitBase {
      canvasWidth: number;
      canvasHeight: number;
      name: string;
      documentation: string;
  }
  export interface PageCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/page relevant section in reference guide}
   */
  export interface Page extends FormBaseBase {
      $Type: "Pages$Page";
      $CreationOptions: PageCreationOptions;
      parameter: string;
      parameters: PageParameter[];
      layoutCall: LayoutCall;
      title: Texts.Text;
      appearance: Appearance;
      allowedRoles: string[];
      popupCloseAction: string;
      popupWidth: number;
      popupHeight: number;
      popupResizable: boolean;
      markAsUsed: boolean;
      url: string;
      variables: LocalVariable[];
      addPageParameter(options: PageParameterCreationOptions): Promise<PageParameter>;
      getPageParameter(name: string): PageParameter;
      addLocalVariable(options: LocalVariableCreationOptions): Promise<LocalVariable>;
      getLocalVariable(name: string): LocalVariable;
  }
  export interface ParameterAttributeUrlSegment extends Url.UrlSegmentBase {
      $Type: "Pages$ParameterAttributeUrlSegment";
      pageParameter: string;
      attribute: string;
  }
  export interface ParameterIdUrlSegment extends Url.UrlSegmentBase {
      $Type: "Pages$ParameterIdUrlSegment";
      pageParameter: string;
  }
  export interface PageParameterCreationOptions {
      name: string;
  }
  export interface PageParameter extends Primitives.ElementBase {
      $Type: "Pages$PageParameter";
      $CreationOptions: PageParameterCreationOptions;
      name: string;
      parameterType: DataTypes.DataType;
      getContainer(): Page;
      delete(): void;
  }
  export interface LayoutCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/layout relevant section in reference guide}
   */
  export interface Layout extends FormBaseBase {
      $Type: "Pages$Layout";
      $CreationOptions: LayoutCreationOptions;
      parameters: LayoutParameter[];
      content: LayoutContent;
      appearance: Appearance;
      addLayoutParameter(options: LayoutParameterCreationOptions): Promise<LayoutParameter>;
      getLayoutParameter(name: string): LayoutParameter;
  }
  export interface LayoutContentBase extends Primitives.ElementBase {
      getContainer(): Layout;
      delete(): void;
  }
  export interface WebLayoutContent extends LayoutContentBase {
      $Type: "Pages$WebLayoutContent";
      layoutType: LayoutType;
      layoutCall: LayoutCall | null;
      widgets: Widget[];
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  export interface NativeLayoutContent extends LayoutContentBase {
      $Type: "Pages$NativeLayoutContent";
      layoutType: NativeLayoutType;
      widgets: Widget[];
      rightHeaderPlaceholder: Placeholder | null;
      showBottomBar: boolean;
      sidebar: boolean;
      sidebarWidgets: Widget[];
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  export interface LayoutCall extends Primitives.ElementBase {
      $Type: "Pages$LayoutCall";
      layout: string;
      arguments: LayoutCallArgument[];
      addLayoutCallArgument(): Promise<LayoutCallArgument>;
  }
  export interface LayoutCallArgument extends Primitives.ElementBase {
      $Type: "Pages$LayoutCallArgument";
      parameter: string;
      widgets: Widget[];
      getContainer(): LayoutCall;
      delete(): void;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  export interface LayoutParameterCreationOptions {
      name: string;
  }
  export interface LayoutParameter extends Primitives.ElementBase {
      $Type: "Pages$LayoutParameter";
      $CreationOptions: LayoutParameterCreationOptions;
      name: string;
      getContainer(): Layout;
      delete(): void;
  }
  export interface PlaceholderCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/placeholder relevant section in reference guide}
   */
  export interface Placeholder extends WidgetBase {
      $Type: "Pages$Placeholder";
      $CreationOptions: PlaceholderCreationOptions;
      getContainer(): NativeLayoutContent;
      delete(): void;
  }
  export interface TemplateFormBaseBase extends FormBaseBase {
      displayName: string;
      documentationUrl: string;
      templateCategory: string;
      templateCategoryWeight: number;
      imageData: any;
  }
  export interface BuildingBlockCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/building-block relevant section in reference guide}
   */
  export interface BuildingBlock extends TemplateFormBaseBase {
      $Type: "Pages$BuildingBlock";
      $CreationOptions: BuildingBlockCreationOptions;
      widgets: Widget[];
      platform: SnippetType;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  export interface TemplateTypeBase extends Primitives.ElementBase {
      getContainer(): PageTemplate;
      delete(): void;
  }
  export interface RegularPageTemplateType extends TemplateTypeBase {
      $Type: "Pages$RegularPageTemplateType";
  }
  export interface EditPageTemplateType extends TemplateTypeBase {
      $Type: "Pages$EditPageTemplateType";
  }
  export interface SelectPageTemplateType extends TemplateTypeBase {
      $Type: "Pages$SelectPageTemplateType";
  }
  export interface PageTemplateCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/page-templates relevant section in reference guide}
   */
  export interface PageTemplate extends TemplateFormBaseBase {
      $Type: "Pages$PageTemplate";
      $CreationOptions: PageTemplateCreationOptions;
      layoutCall: LayoutCall;
      appearance: Appearance;
      templateType: TemplateType;
  }
  export interface TemplatePlaceholderCreationOptions {
      name: string;
  }
  export interface TemplatePlaceholder extends WidgetBase {
      $Type: "Pages$TemplatePlaceholder";
      $CreationOptions: TemplatePlaceholderCreationOptions;
      type: string;
  }
  export interface ClientActionBase extends Primitives.ElementBase {
      disabledDuringExecution: boolean;
  }
  export interface NoClientAction extends ClientActionBase {
      $Type: "Pages$NoClientAction";
  }
  export interface PageClientAction extends ClientActionBase {
      $Type: "Pages$PageClientAction";
      pageSettings: PageSettings;
      pagesForSpecializations: PageForSpecialization[];
      numberOfPagesToClose2: string | null;
      addPageForSpecialization(): Promise<PageForSpecialization>;
  }
  export interface MicroflowClientAction extends ClientActionBase {
      $Type: "Pages$MicroflowClientAction";
      microflowSettings: MicroflowSettings;
  }
  export interface CallNanoflowClientAction extends ClientActionBase {
      $Type: "Pages$CallNanoflowClientAction";
      nanoflow: string | null;
      parameterMappings: NanoflowParameterMapping[];
      progressBar: ProgressBarType;
      progressMessage: Texts.Text | null;
      confirmationInfo: ConfirmationInfo | null;
      addNanoflowParameterMapping(): Promise<NanoflowParameterMapping>;
  }
  export interface SignOutClientAction extends ClientActionBase {
      $Type: "Pages$SignOutClientAction";
  }
  export interface SaveChangesClientAction extends ClientActionBase {
      $Type: "Pages$SaveChangesClientAction";
      syncAutomatically: boolean;
      closePage: boolean;
  }
  export interface CancelChangesClientAction extends ClientActionBase {
      $Type: "Pages$CancelChangesClientAction";
      closePage: boolean;
  }
  export interface ClosePageClientAction extends ClientActionBase {
      $Type: "Pages$ClosePageClientAction";
      numberOfPagesToClose: string | null;
  }
  export interface SyncClientAction extends ClientActionBase {
      $Type: "Pages$SyncClientAction";
  }
  export interface OpenLinkClientAction extends ClientActionBase {
      $Type: "Pages$OpenLinkClientAction";
      linkType: LinkType;
      address: StaticOrDynamicString;
  }
  export interface DeleteClientAction extends ClientActionBase {
      $Type: "Pages$DeleteClientAction";
      closePage: boolean;
      sourceVariable: PageVariable | null;
  }
  export interface CreateObjectClientAction extends ClientActionBase {
      $Type: "Pages$CreateObjectClientAction";
      entityRef: DomainModels.EntityRef | null;
      pageSettings: PageSettings;
      numberOfPagesToClose2: string | null;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/on-click-event relevant section in reference guide}
   */
  export interface PageSettings extends Primitives.ElementBase {
      $Type: "Pages$PageSettings";
      page: string | null;
      parameterMappings: PageParameterMapping[];
      addPageParameterMapping(): Promise<PageParameterMapping>;
  }
  export interface PageParameterMapping extends Primitives.ElementBase {
      $Type: "Pages$PageParameterMapping";
      parameter: string;
      variable: PageVariable;
      argument: string | null;
      getContainer(): PageSettings;
      delete(): void;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/on-click-event relevant section in reference guide}
   */
  export interface MicroflowSettings extends Primitives.ElementBase {
      $Type: "Pages$MicroflowSettings";
      microflow: string | null;
      parameterMappings: MicroflowParameterMapping[];
      progressBar: ProgressBarType;
      progressMessage: Texts.Text | null;
      asynchronous: boolean;
      formValidations: FormValidations;
      confirmationInfo: ConfirmationInfo | null;
      addMicroflowParameterMapping(): Promise<MicroflowParameterMapping>;
  }
  export interface MicroflowParameterMapping extends Primitives.ElementBase {
      $Type: "Pages$MicroflowParameterMapping";
      parameter: string;
      expression: string | null;
      variable: PageVariable | null;
      getContainer(): MicroflowSettings;
      delete(): void;
  }
  export interface NanoflowParameterMapping extends Primitives.ElementBase {
      $Type: "Pages$NanoflowParameterMapping";
      parameter: string;
      expression: string | null;
      variable: PageVariable | null;
  }
  export interface ConfirmationInfo extends Primitives.ElementBase {
      $Type: "Pages$ConfirmationInfo";
      question: Texts.Text;
      proceedButtonCaption: Texts.Text;
      cancelButtonCaption: Texts.Text;
  }
  export interface PageVariable extends Primitives.ElementBase {
      $Type: "Pages$PageVariable";
      widget: string | null;
      pageParameter: string | null;
      snippetParameter: string | null;
      localVariable: string | null;
      useAllPages: boolean;
  }
  export interface LocalVariableCreationOptions {
      name: string;
  }
  export interface LocalVariable extends Primitives.ElementBase {
      $Type: "Pages$LocalVariable";
      $CreationOptions: LocalVariableCreationOptions;
      name: string;
      variableType: DataTypes.DataType;
      defaultValue: string | null;
  }
  export interface Appearance extends Primitives.ElementBase {
      $Type: "Pages$Appearance";
      class: string;
      style: string;
      designProperties: DesignPropertyValue[];
      dynamicClasses: string | null;
      addDesignPropertyValue(): Promise<DesignPropertyValue>;
  }
  export interface DesignPropertyValue extends Primitives.ElementBase {
      $Type: "Pages$DesignPropertyValue";
      key: string;
      value: AbstractDesignPropertyValue | null;
  }
  export interface AbstractDesignPropertyValueBase extends Primitives.ElementBase {
      getContainer(): DesignPropertyValue;
      delete(): void;
  }
  export interface OptionDesignPropertyValue extends AbstractDesignPropertyValueBase {
      $Type: "Pages$OptionDesignPropertyValue";
      option: string;
  }
  export interface ToggleDesignPropertyValue extends AbstractDesignPropertyValueBase {
      $Type: "Pages$ToggleDesignPropertyValue";
  }
  export interface CustomDesignPropertyValue extends AbstractDesignPropertyValueBase {
      $Type: "Pages$CustomDesignPropertyValue";
      value: string;
  }
  export interface CompoundDesignPropertyValue extends AbstractDesignPropertyValueBase {
      $Type: "Pages$CompoundDesignPropertyValue";
      properties: DesignPropertyValue[];
      addDesignPropertyValue(): Promise<DesignPropertyValue>;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/pages relevant section in reference guide}
   */
  export interface WidgetBase extends Primitives.ElementBase {
      name: string;
      appearance: Appearance;
      tabIndex: number;
  }
  export interface LabelCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/label relevant section in reference guide}
   */
  export interface Label extends ConditionallyVisibleWidgetBase {
      $Type: "Pages$Label";
      $CreationOptions: LabelCreationOptions;
      caption: Texts.Text;
  }
  export interface StaticImageViewerCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/image relevant section in reference guide}
   */
  export interface StaticImageViewer extends ConditionallyVisibleWidgetBase {
      $Type: "Pages$StaticImageViewer";
      $CreationOptions: StaticImageViewerCreationOptions;
      image: string | null;
      widthUnit: ImageSizeUnit;
      heightUnit: ImageSizeUnit;
      width: number;
      height: number;
      clickAction: ClientAction;
      responsive: boolean;
      alternativeText: ClientTemplate;
      nativeAccessibilitySettings: AccessibilitySettings | null;
  }
  export interface DivContainerCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/container relevant section in reference guide}
   */
  export interface DivContainer extends ConditionallyVisibleWidgetBase {
      $Type: "Pages$DivContainer";
      $CreationOptions: DivContainerCreationOptions;
      widgets: Widget[];
      renderMode: ContainerRenderMode;
      onClickAction: ClientAction;
      screenReaderHidden: boolean;
      nativeAccessibilitySettings: AccessibilitySettings | null;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  export interface TextBoxCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/text-box relevant section in reference guide}
   */
  export interface TextBox extends TextWidgetBase {
      $Type: "Pages$TextBox";
      $CreationOptions: TextBoxCreationOptions;
      inputMask: string;
      formattingInfo: FormattingInfo;
      isPasswordBox: boolean;
      keyboardType: KeyboardType;
      onEnterKeyPressAction: ClientAction;
      autocomplete: boolean;
      autocompletePurpose: AutocompletePurposeType;
      submitBehaviour: SubmitBehaviourType;
      submitOnInputDelay: number;
      nativeAccessibilitySettings: AccessibilitySettings | null;
  }
  export interface TextAreaCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/text-area relevant section in reference guide}
   */
  export interface TextArea extends TextWidgetBase {
      $Type: "Pages$TextArea";
      $CreationOptions: TextAreaCreationOptions;
      numberOfLines: number;
      counterMessage: Texts.Text;
      textTooLongMessage: Texts.Text;
      autocomplete: boolean;
      submitBehaviour: SubmitBehaviourType;
      submitOnInputDelay: number;
      nativeAccessibilitySettings: AccessibilitySettings | null;
  }
  export interface CheckBoxCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/check-box relevant section in reference guide}
   */
  export interface CheckBox extends AttributeWidgetBase {
      $Type: "Pages$CheckBox";
      $CreationOptions: CheckBoxCreationOptions;
      labelPosition: LabelPosition;
      nativeRenderMode: NativeRenderMode;
      nativeAccessibilitySettings: AccessibilitySettings | null;
  }
  export interface RadioButtonGroupCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/radio-buttons relevant section in reference guide}
   */
  export interface RadioButtonGroup extends AttributeWidgetBase {
      $Type: "Pages$RadioButtonGroup";
      $CreationOptions: RadioButtonGroupCreationOptions;
      renderHorizontal: boolean;
  }
  export interface DatePickerCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/date-picker relevant section in reference guide}
   */
  export interface DatePicker extends AttributeWidgetWithPlaceholderBase {
      $Type: "Pages$DatePicker";
      $CreationOptions: DatePickerCreationOptions;
      formattingInfo: FormattingInfo;
      nativeAccessibilitySettings: AccessibilitySettings | null;
  }
  export interface LoginTextBoxBase extends WidgetBase {
      label: Texts.Text | null;
      labelWidth: number;
      placeholder: Texts.Text;
  }
  export interface LoginIdTextBoxCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/login-id-text-box relevant section in reference guide}
   */
  export interface LoginIdTextBox extends LoginTextBoxBase {
      $Type: "Pages$LoginIdTextBox";
      $CreationOptions: LoginIdTextBoxCreationOptions;
  }
  export interface PasswordTextBoxCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/password-text-box relevant section in reference guide}
   */
  export interface PasswordTextBox extends LoginTextBoxBase {
      $Type: "Pages$PasswordTextBox";
      $CreationOptions: PasswordTextBoxCreationOptions;
  }
  export interface LoginButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/sign-in-button relevant section in reference guide}
   */
  export interface LoginButton extends ButtonBase {
      $Type: "Pages$LoginButton";
      $CreationOptions: LoginButtonCreationOptions;
      validationMessageWidget: string;
  }
  export interface ValidationMessageCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/validation-message relevant section in reference guide}
   */
  export interface ValidationMessage extends WidgetBase {
      $Type: "Pages$ValidationMessage";
      $CreationOptions: ValidationMessageCreationOptions;
  }
  export interface FormattingInfo extends Primitives.ElementBase {
      $Type: "Pages$FormattingInfo";
      decimalPrecision: number;
      groupDigits: boolean;
      enumFormat: EnumFormat;
      dateFormat: DateFormat;
      customDateFormat: string;
  }
  export interface TextWidgetBase extends AttributeWidgetWithPlaceholderBase {
      maxLengthCode: number;
      autoFocus: boolean;
  }
  export interface AttributeWidgetWithPlaceholderBase extends AttributeWidgetBase {
      placeholderTemplate: ClientTemplate;
  }
  export interface AttributeWidgetBase extends MemberWidgetBase {
      validation: WidgetValidation;
      onChangeAction: ClientAction;
      onEnterAction: ClientAction;
      onLeaveAction: ClientAction;
      sourceVariable: PageVariable | null;
      ariaRequired: boolean;
  }
  export interface WidgetValidation extends Primitives.ElementBase {
      $Type: "Pages$WidgetValidation";
      expression: string | null;
      message: Texts.Text;
  }
  export interface MemberWidgetBase extends InputWidgetBase {
      attributeRef: DomainModels.AttributeRef | null;
      readOnlyStyle: ReadOnlyStyle;
  }
  export interface InputWidgetBase extends ConditionallyEditableWidgetBase {
      labelTemplate: ClientTemplate | null;
      screenReaderLabel: ClientTemplate | null;
  }
  export interface ConditionallyEditableWidgetBase extends ConditionallyVisibleWidgetBase {
      conditionalEditabilitySettings: ConditionalEditabilitySettings | null;
      editable: EditableEnum;
  }
  export interface ConditionallyVisibleWidgetBase extends WidgetBase {
      conditionalVisibilitySettings: ConditionalVisibilitySettings | null;
  }
  export interface ConditionalSettingsBase extends Primitives.ElementBase {
      attribute: string | null;
      conditions: Enumerations.Condition[];
      expression: string | null;
      sourceVariable: PageVariable | null;
  }
  export interface ConditionalVisibilitySettings extends ConditionalSettingsBase {
      $Type: "Pages$ConditionalVisibilitySettings";
      moduleRoles: string[];
      ignoreSecurity: boolean;
  }
  export interface ConditionalEditabilitySettings extends ConditionalSettingsBase {
      $Type: "Pages$ConditionalEditabilitySettings";
  }
  export interface AccessibilitySettings extends Primitives.ElementBase {
      $Type: "Pages$AccessibilitySettings";
      screenReaderDescription: ClientTemplate;
      screenReaderTitle: ClientTemplate;
  }
  export interface TableCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/table relevant section in reference guide}
   */
  export interface Table extends ConditionallyVisibleWidgetBase {
      $Type: "Pages$Table";
      $CreationOptions: TableCreationOptions;
      cells: TableCell[];
      columns: TableColumn[];
      widthUnit: UnitEnum;
      rows: TableRow[];
      addTableCell(): Promise<TableCell>;
      addTableColumn(): Promise<TableColumn>;
      addTableRow(): Promise<TableRow>;
  }
  export interface TableCell extends Primitives.ElementBase {
      $Type: "Pages$TableCell";
      appearance: Appearance;
      isHeader: boolean;
      widgets: Widget[];
      leftColumnIndex: number;
      topRowIndex: number;
      width: number;
      height: number;
      getContainer(): Table;
      delete(): void;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  export interface TableColumn extends Primitives.ElementBase {
      $Type: "Pages$TableColumn";
      width: number;
      getContainer(): Table;
      delete(): void;
  }
  export interface TableRow extends Primitives.ElementBase {
      $Type: "Pages$TableRow";
      appearance: Appearance;
      conditionalVisibilitySettings: ConditionalVisibilitySettings | null;
      getContainer(): Table;
      delete(): void;
  }
  export interface EntityWidgetBase extends ConditionallyVisibleWidgetBase {
      dataSource: DataSource;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/data-sources relevant section in reference guide}
   */
  export interface DataSourceBase extends Primitives.ElementBase {
      forceFullObjects: boolean;
  }
  export interface EntityPathSourceBase extends DataSourceBase {
      entityRef: DomainModels.EntityRef | null;
      sourceVariable: PageVariable | null;
  }
  export interface MicroflowSource extends DataSourceBase {
      $Type: "Pages$MicroflowSource";
      microflowSettings: MicroflowSettings;
  }
  export interface NanoflowSource extends DataSourceBase {
      $Type: "Pages$NanoflowSource";
      nanoflow: string | null;
      parameterMappings: NanoflowParameterMapping[];
      addNanoflowParameterMapping(): Promise<NanoflowParameterMapping>;
  }
  export interface ListenTargetWidgetBase extends EntityWidgetBase {
  }
  export interface AssociationSource extends EntityPathSourceBase {
      $Type: "Pages$AssociationSource";
  }
  export interface DataViewCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/data-view relevant section in reference guide}
   */
  export interface DataView extends EntityWidgetBase {
      $Type: "Pages$DataView";
      $CreationOptions: DataViewCreationOptions;
      widgets: Widget[];
      footerWidgets: Widget[];
      editability: EditableEnum;
      conditionalEditabilitySettings: ConditionalEditabilitySettings | null;
      showFooter: boolean;
      noEntityMessage: Texts.Text;
      labelWidth: number;
      readOnlyStyle: DataViewReadOnlyStyle;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  export interface DataViewSource extends EntityPathSourceBase {
      $Type: "Pages$DataViewSource";
  }
  export interface ListenTargetSource extends DataSourceBase {
      $Type: "Pages$ListenTargetSource";
      listenTarget: string;
  }
  export interface ControlBarBase extends Primitives.ElementBase {
      items: ControlBarItem[];
      addComparisonSearchField(options: ComparisonSearchFieldCreationOptions): Promise<ComparisonSearchField>;
      getComparisonSearchField(name: string): ComparisonSearchField;
      addDataGridAddButton(options: DataGridAddButtonCreationOptions): Promise<DataGridAddButton>;
      getDataGridAddButton(name: string): DataGridAddButton;
      addDataGridExportToCSVButton(options: DataGridExportToCSVButtonCreationOptions): Promise<DataGridExportToCSVButton>;
      getDataGridExportToCSVButton(name: string): DataGridExportToCSVButton;
      addDataGridExportToExcelButton(options: DataGridExportToExcelButtonCreationOptions): Promise<DataGridExportToExcelButton>;
      getDataGridExportToExcelButton(name: string): DataGridExportToExcelButton;
      addDataGridRemoveButton(options: DataGridRemoveButtonCreationOptions): Promise<DataGridRemoveButton>;
      getDataGridRemoveButton(name: string): DataGridRemoveButton;
      addDropDownSearchField(options: DropDownSearchFieldCreationOptions): Promise<DropDownSearchField>;
      getDropDownSearchField(name: string): DropDownSearchField;
      addGridActionButton(options: GridActionButtonCreationOptions): Promise<GridActionButton>;
      getGridActionButton(name: string): GridActionButton;
      addGridDeselectAllButton(options: GridDeselectAllButtonCreationOptions): Promise<GridDeselectAllButton>;
      getGridDeselectAllButton(name: string): GridDeselectAllButton;
      addGridNewButton(options: GridNewButtonCreationOptions): Promise<GridNewButton>;
      getGridNewButton(name: string): GridNewButton;
      addGridSearchButton(options: GridSearchButtonCreationOptions): Promise<GridSearchButton>;
      getGridSearchButton(name: string): GridSearchButton;
      addGridSelectAllButton(options: GridSelectAllButtonCreationOptions): Promise<GridSelectAllButton>;
      getGridSelectAllButton(name: string): GridSelectAllButton;
      addRangeSearchField(options: RangeSearchFieldCreationOptions): Promise<RangeSearchField>;
      getRangeSearchField(name: string): RangeSearchField;
      addSelectButton(options: SelectButtonCreationOptions): Promise<SelectButton>;
      getSelectButton(name: string): SelectButton;
  }
  export interface ControlBarItemBase extends Primitives.ElementBase {
      name: string;
      getContainer(): ControlBar;
      delete(): void;
  }
  export interface ControlBarButtonBase extends ControlBarItemBase {
      caption: ClientTemplate;
      tooltip: Texts.Text;
      icon: Icon | null;
      appearance: Appearance;
      conditionalVisibilitySettings: ConditionalVisibilitySettings | null;
      buttonStyle: ButtonStyle;
  }
  export interface ListViewCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/list-view relevant section in reference guide}
   */
  export interface ListView extends ListenTargetWidgetBase {
      $Type: "Pages$ListView";
      $CreationOptions: ListViewCreationOptions;
      widgets: Widget[];
      pageSize: number;
      clickAction: ClientAction;
      editable: boolean;
      templates: ListViewTemplate[];
      scrollDirection: ScrollDirection;
      numberOfColumns: number;
      pullDownAction: ClientAction;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
      addListViewTemplate(): Promise<ListViewTemplate>;
  }
  export interface ListViewTemplate extends Primitives.ElementBase {
      $Type: "Pages$ListViewTemplate";
      specialization: string;
      widgets: Widget[];
      getContainer(): ListView;
      delete(): void;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  export interface SortableEntityPathSourceBase extends EntityPathSourceBase {
      sortBar: GridSortBar;
  }
  export interface XPathSourceBaseBase extends SortableEntityPathSourceBase {
      xPathConstraint: string | null;
  }
  export interface ListViewXPathSource extends XPathSourceBaseBase {
      $Type: "Pages$ListViewXPathSource";
      search: ListViewSearch;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/sort-bar relevant section in reference guide}
   */
  export interface GridSortBar extends Primitives.ElementBase {
      $Type: "Pages$GridSortBar";
      sortItems: GridSortItem[];
      addGridSortItem(): Promise<GridSortItem>;
  }
  export interface GridSortItem extends Primitives.ElementBase {
      $Type: "Pages$GridSortItem";
      attributeRef: DomainModels.AttributeRef;
      sortDirection: SortDirection;
      getContainer(): GridSortBar;
      delete(): void;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/button-widgets relevant section in reference guide}
   */
  export interface ButtonBase extends ConditionallyVisibleWidgetBase {
      caption: ClientTemplate;
      tooltip: Texts.Text;
      icon: Icon | null;
      renderType: RenderType;
      buttonStyle: ButtonStyle;
  }
  export interface StaticOrDynamicString extends Primitives.ElementBase {
      $Type: "Pages$StaticOrDynamicString";
      isDynamic: boolean;
      value: string;
      attributeRef: DomainModels.AttributeRef | null;
      getContainer(): OpenLinkClientAction;
      delete(): void;
  }
  export interface ActionButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/button-widgets relevant section in reference guide}
   */
  export interface ActionButton extends ButtonBase {
      $Type: "Pages$ActionButton";
      $CreationOptions: ActionButtonCreationOptions;
      action: ClientAction;
      ariaRole: ButtonAriaRoleType;
      nativeAccessibilitySettings: AccessibilitySettings | null;
  }
  export interface ClientTemplate extends Primitives.ElementBase {
      $Type: "Pages$ClientTemplate";
      template: Texts.Text;
      parameters: ClientTemplateParameter[];
      fallback: Texts.Text;
      addClientTemplateParameter(): Promise<ClientTemplateParameter>;
  }
  export interface ClientTemplateParameter extends Primitives.ElementBase {
      $Type: "Pages$ClientTemplateParameter";
      attributeRef: DomainModels.AttributeRef | null;
      expression: string | null;
      formattingInfo: FormattingInfo;
      sourceVariable: PageVariable | null;
      getContainer(): ClientTemplate;
      delete(): void;
  }
  export interface ColumnGridBase extends GridBase {
      columns: GridColumn[];
      numberOfRows: number;
      showEmptyRows: boolean;
      widthUnit: UnitEnum;
      tooltipPage: string | null;
      addGridColumn(options: GridColumnCreationOptions): Promise<GridColumn>;
      getGridColumn(name: string): GridColumn;
  }
  export interface ComparisonSearchFieldCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/search-bar relevant section in reference guide}
   */
  export interface ComparisonSearchField extends SingleSearchFieldBase {
      $Type: "Pages$ComparisonSearchField";
      $CreationOptions: ComparisonSearchFieldCreationOptions;
  }
  export interface GridXPathSource extends GridBaseSourceBase {
      $Type: "Pages$GridXPathSource";
      xPathConstraint: string | null;
  }
  export interface DataGridCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/data-grid relevant section in reference guide}
   */
  export interface DataGrid extends ColumnGridBase {
      $Type: "Pages$DataGrid";
      $CreationOptions: DataGridCreationOptions;
      caption: ClientTemplate;
  }
  export interface DataGridAddButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/control-bar relevant section in reference guide}
   */
  export interface DataGridAddButton extends GridControlBarButtonBase {
      $Type: "Pages$DataGridAddButton";
      $CreationOptions: DataGridAddButtonCreationOptions;
      pageSettings: PageSettings;
  }
  export interface DataGridExportToCSVButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/control-bar relevant section in reference guide}
   */
  export interface DataGridExportToCSVButton extends GridControlBarButtonBase {
      $Type: "Pages$DataGridExportToCSVButton";
      $CreationOptions: DataGridExportToCSVButtonCreationOptions;
      maxNumberOfRows: number;
      decimalSeparator: string;
      groupSeparator: string;
      delimiter: string;
      generateExcelHint: boolean;
      useGridDateFormat: boolean;
  }
  export interface DataGridExportToExcelButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/control-bar relevant section in reference guide}
   */
  export interface DataGridExportToExcelButton extends GridControlBarButtonBase {
      $Type: "Pages$DataGridExportToExcelButton";
      $CreationOptions: DataGridExportToExcelButtonCreationOptions;
      maxNumberOfRows: number;
      useExcelDateType: boolean;
  }
  export interface DataGridRemoveButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/control-bar relevant section in reference guide}
   */
  export interface DataGridRemoveButton extends GridControlBarButtonBase {
      $Type: "Pages$DataGridRemoveButton";
      $CreationOptions: DataGridRemoveButtonCreationOptions;
  }
  export interface DropDownCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/drop-down relevant section in reference guide}
   */
  export interface DropDown extends AttributeWidgetBase {
      $Type: "Pages$DropDown";
      $CreationOptions: DropDownCreationOptions;
      emptyOptionCaption: Texts.Text;
      nativeAccessibilitySettings: AccessibilitySettings | null;
  }
  export interface DropDownButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/button-widgets relevant section in reference guide}
   */
  export interface DropDownButton extends ButtonBase {
      $Type: "Pages$DropDownButton";
      $CreationOptions: DropDownButtonCreationOptions;
      items: DropDownButtonItem[];
      addDropDownButtonItem(): Promise<DropDownButtonItem>;
  }
  export interface ActionItemBase extends Primitives.ElementBase {
      action: ClientAction;
  }
  export interface DropDownButtonItem extends ActionItemBase {
      $Type: "Pages$DropDownButtonItem";
      caption: Texts.Text;
      image: string | null;
      getContainer(): DropDownButton;
      delete(): void;
  }
  export interface DropDownSearchFieldCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/search-bar relevant section in reference guide}
   */
  export interface DropDownSearchField extends SingleSearchFieldBase {
      $Type: "Pages$DropDownSearchField";
      $CreationOptions: DropDownSearchFieldCreationOptions;
      sortBar: GridSortBar;
      xPathConstraint: string | null;
      allowMultipleSelect: boolean;
  }
  export interface DynamicImageViewerCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/image-viewer relevant section in reference guide}
   */
  export interface DynamicImageViewer extends EntityWidgetBase {
      $Type: "Pages$DynamicImageViewer";
      $CreationOptions: DynamicImageViewerCreationOptions;
      defaultImage: string | null;
      widthUnit: ImageSizeUnit;
      heightUnit: ImageSizeUnit;
      width: number;
      height: number;
      responsive: boolean;
      showAsThumbnail: boolean;
      clickAction: ClientAction;
      onClickEnlarge: boolean;
      alternativeText: ClientTemplate;
      nativeAccessibilitySettings: AccessibilitySettings | null;
  }
  export interface DynamicTextCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/text relevant section in reference guide}
   */
  export interface DynamicText extends ConditionallyVisibleWidgetBase {
      $Type: "Pages$DynamicText";
      $CreationOptions: DynamicTextCreationOptions;
      content: ClientTemplate;
      renderMode: TextRenderMode;
      nativeTextStyle: NativeTextStyle;
      nativeAccessibilitySettings: AccessibilitySettings | null;
  }
  export interface FileManagerCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/file-manager relevant section in reference guide}
   */
  export interface FileManager extends InputWidgetBase {
      $Type: "Pages$FileManager";
      $CreationOptions: FileManagerCreationOptions;
      allowedExtensions: string;
      type: FileManagerType;
      maxFileSize: number;
      showFileInBrowser: boolean;
  }
  export interface PageForSpecialization extends Primitives.ElementBase {
      $Type: "Pages$PageForSpecialization";
      entity: string;
      pageSettings: PageSettings;
      getContainer(): PageClientAction;
      delete(): void;
  }
  export interface GlyphIcon extends IconBase {
      $Type: "Pages$GlyphIcon";
      code: number;
  }
  export interface GridBase extends ListenTargetWidgetBase {
      isControlBarVisible: boolean;
      showPagingBar: ShowPagingBarType;
      selectionMode: GridSelectionMode;
      selectFirst: boolean;
      defaultButtonTrigger: ClickTypeType;
      refreshTime: number;
      controlBar: GridControlBar;
  }
  export interface GridActionButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/control-bar relevant section in reference guide}
   */
  export interface GridActionButton extends GridControlBarButtonBase {
      $Type: "Pages$GridActionButton";
      $CreationOptions: GridActionButtonCreationOptions;
      action: ClientAction;
      maintainSelectionAfterMicroflow: boolean;
  }
  export interface GridBaseSourceBase extends SortableEntityPathSourceBase {
      searchBar: SearchBar;
  }
  export interface GridColumnCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/columns relevant section in reference guide}
   */
  export interface GridColumn extends Primitives.ElementBase {
      $Type: "Pages$GridColumn";
      $CreationOptions: GridColumnCreationOptions;
      name: string;
      caption: Texts.Text;
      attributeRef: DomainModels.AttributeRef | null;
      formattingInfo: FormattingInfo;
      showTooltip: boolean;
      aggregateCaption: Texts.Text;
      aggregateFunction: AggregateFunction;
      editable: boolean;
      width: number;
      appearance: Appearance;
      getContainer(): ColumnGrid;
      delete(): void;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/control-bar relevant section in reference guide}
   */
  export interface GridControlBar extends ControlBarBase {
      $Type: "Pages$GridControlBar";
      defaultButton: string | null;
      getContainer(): Grid;
      delete(): void;
  }
  export interface GridControlBarButtonBase extends ControlBarButtonBase {
  }
  export interface GridDeselectAllButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/control-bar relevant section in reference guide}
   */
  export interface GridDeselectAllButton extends GridControlBarButtonBase {
      $Type: "Pages$GridDeselectAllButton";
      $CreationOptions: GridDeselectAllButtonCreationOptions;
  }
  export interface GridNewButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/control-bar relevant section in reference guide}
   */
  export interface GridNewButton extends GridControlBarButtonBase {
      $Type: "Pages$GridNewButton";
      $CreationOptions: GridNewButtonCreationOptions;
      entity: string | null;
      editLocation: NewButtonEditLocation;
      pageSettings: PageSettings;
  }
  export interface GridSearchButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/control-bar relevant section in reference guide}
   */
  export interface GridSearchButton extends GridControlBarButtonBase {
      $Type: "Pages$GridSearchButton";
      $CreationOptions: GridSearchButtonCreationOptions;
  }
  export interface GridSelectAllButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/control-bar relevant section in reference guide}
   */
  export interface GridSelectAllButton extends GridControlBarButtonBase {
      $Type: "Pages$GridSelectAllButton";
      $CreationOptions: GridSelectAllButtonCreationOptions;
      selectionType: SelectionType;
  }
  export interface GroupBoxCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/group-box relevant section in reference guide}
   */
  export interface GroupBox extends ConditionallyVisibleWidgetBase {
      $Type: "Pages$GroupBox";
      $CreationOptions: GroupBoxCreationOptions;
      caption: ClientTemplate | null;
      collapsible: GroupBoxCollapsible;
      headerMode: GroupBoxRenderMode;
      widgets: Widget[];
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  export interface HeaderCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/header relevant section in reference guide}
   */
  export interface Header extends WidgetBase {
      $Type: "Pages$Header";
      $CreationOptions: HeaderCreationOptions;
      leftWidgets: Widget[];
      rightWidgets: Widget[];
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/image relevant section in reference guide}
   */
  export interface IconBase extends Primitives.ElementBase {
  }
  export interface ImageIcon extends IconBase {
      $Type: "Pages$ImageIcon";
      image: string;
  }
  export interface IconCollectionIcon extends IconBase {
      $Type: "Pages$IconCollectionIcon";
      image: string;
  }
  export interface ImageUploaderCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/image-uploader relevant section in reference guide}
   */
  export interface ImageUploader extends InputWidgetBase {
      $Type: "Pages$ImageUploader";
      $CreationOptions: ImageUploaderCreationOptions;
      allowedExtensions: string;
      thumbnailSize: string;
      maxFileSize: number;
  }
  export interface ImageViewerSource extends EntityPathSourceBase {
      $Type: "Pages$ImageViewerSource";
  }
  export interface InputReferenceSetSelectorCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/input-reference-set-selector relevant section in reference guide}
   */
  export interface InputReferenceSetSelector extends AssociationWidgetBase {
      $Type: "Pages$InputReferenceSetSelector";
      $CreationOptions: InputReferenceSetSelectorCreationOptions;
  }
  export interface LayoutGridCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/layout-grid relevant section in reference guide}
   */
  export interface LayoutGrid extends ConditionallyVisibleWidgetBase {
      $Type: "Pages$LayoutGrid";
      $CreationOptions: LayoutGridCreationOptions;
      width: ContainerWidth;
      rows: LayoutGridRow[];
      addLayoutGridRow(): Promise<LayoutGridRow>;
  }
  export interface LayoutGridColumn extends Primitives.ElementBase {
      $Type: "Pages$LayoutGridColumn";
      weight: number;
      tabletWeight: number;
      phoneWeight: number;
      previewWidth: number;
      widgets: Widget[];
      appearance: Appearance;
      verticalAlignment: LayoutGridAlignment;
      getContainer(): LayoutGridRow;
      delete(): void;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  export interface LayoutGridRow extends Primitives.ElementBase {
      $Type: "Pages$LayoutGridRow";
      columns: LayoutGridColumn[];
      conditionalVisibilitySettings: ConditionalVisibilitySettings | null;
      appearance: Appearance;
      verticalAlignment: LayoutGridAlignment;
      horizontalAlignment: LayoutGridAlignment;
      spacingBetweenColumns: boolean;
      getContainer(): LayoutGrid;
      delete(): void;
      addLayoutGridColumn(): Promise<LayoutGridColumn>;
  }
  export interface MenuBarCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/menu-bar relevant section in reference guide}
   */
  export interface MenuBar extends MenuWidgetBase {
      $Type: "Pages$MenuBar";
      $CreationOptions: MenuBarCreationOptions;
  }
  export interface MenuDocumentSource extends MenuSourceBase {
      $Type: "Pages$MenuDocumentSource";
      menu: string | null;
  }
  export interface MenuSourceBase extends Primitives.ElementBase {
      getContainer(): MenuWidget;
      delete(): void;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/menu-widgets relevant section in reference guide}
   */
  export interface MenuWidgetBase extends WidgetBase {
      menuSource: MenuSource;
  }
  export interface NavigationListCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/navigation-list relevant section in reference guide}
   */
  export interface NavigationList extends ConditionallyVisibleWidgetBase {
      $Type: "Pages$NavigationList";
      $CreationOptions: NavigationListCreationOptions;
      items: NavigationListItem[];
      addNavigationListItem(): Promise<NavigationListItem>;
  }
  export interface NavigationListItem extends ActionItemBase {
      $Type: "Pages$NavigationListItem";
      widgets: Widget[];
      appearance: Appearance;
      conditionalVisibilitySettings: ConditionalVisibilitySettings | null;
      getContainer(): NavigationList;
      delete(): void;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  export interface NavigationSource extends MenuSourceBase {
      $Type: "Pages$NavigationSource";
      navigationProfile: string;
  }
  export interface NavigationTreeCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/navigation-tree relevant section in reference guide}
   */
  export interface NavigationTree extends MenuWidgetBase {
      $Type: "Pages$NavigationTree";
      $CreationOptions: NavigationTreeCreationOptions;
  }
  export interface RangeSearchFieldCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/search-bar relevant section in reference guide}
   */
  export interface RangeSearchField extends SearchFieldBase {
      $Type: "Pages$RangeSearchField";
      $CreationOptions: RangeSearchFieldCreationOptions;
      lowerBoundRef: DomainModels.AttributeRef | null;
      upperBoundRef: DomainModels.AttributeRef | null;
      includeLower: boolean;
      includeUpper: boolean;
  }
  export interface ReferenceSelectorCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/reference-selector relevant section in reference guide}
   */
  export interface ReferenceSelector extends AssociationWidgetBase {
      $Type: "Pages$ReferenceSelector";
      $CreationOptions: ReferenceSelectorCreationOptions;
      validation: WidgetValidation;
      renderMode: ReferenceSelectorRenderModeType;
      gotoPageSettings: PageSettings;
      formattingInfo: FormattingInfo;
      emptyOptionCaption: Texts.Text;
      nativeAccessibilitySettings: AccessibilitySettings | null;
  }
  export interface ReferenceSetSelectorCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/reference-set-selector relevant section in reference guide}
   */
  export interface ReferenceSetSelector extends ColumnGridBase {
      $Type: "Pages$ReferenceSetSelector";
      $CreationOptions: ReferenceSetSelectorCreationOptions;
      onChangeAction: ClientAction;
      constrainedByRefs: DomainModels.EntityRef[];
      xPathConstraint: string | null;
  }
  export interface ReferenceSetSource extends GridBaseSourceBase {
      $Type: "Pages$ReferenceSetSource";
  }
  export interface ScrollContainerCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/scroll-container relevant section in reference guide}
   */
  export interface ScrollContainer extends WidgetBase {
      $Type: "Pages$ScrollContainer";
      $CreationOptions: ScrollContainerCreationOptions;
      center: ScrollContainerRegion;
      left: ScrollContainerRegion | null;
      right: ScrollContainerRegion | null;
      top: ScrollContainerRegion | null;
      bottom: ScrollContainerRegion | null;
      layoutMode: LayoutModeType;
      widthMode: SizeMode;
      width: number;
      alignment: AlignmentEnum;
      scrollBehavior: ScrollBehavior;
      nativeHideScrollbars: boolean;
  }
  export interface ScrollContainerRegion extends Primitives.ElementBase {
      $Type: "Pages$ScrollContainerRegion";
      widgets: Widget[];
      sizeMode: SizeMode;
      size: number;
      appearance: Appearance;
      toggleMode: ToggleMode;
      getContainer(): ScrollContainer;
      delete(): void;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/search-bar relevant section in reference guide}
   */
  export interface SearchBar extends ControlBarBase {
      $Type: "Pages$SearchBar";
      type: SearchBarTypeEnum;
      waitForSearch: boolean;
  }
  export interface ListViewSearch extends Primitives.ElementBase {
      $Type: "Pages$ListViewSearch";
      searchRefs: DomainModels.AttributeRef[];
  }
  export interface SearchFieldBase extends ControlBarItemBase {
      caption: Texts.Text;
      placeholder: Texts.Text;
      customDateFormat: string;
      type: SearchFieldType;
      defaultValue: string;
  }
  export interface SelectButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/control-bar relevant section in reference guide}
   */
  export interface SelectButton extends GridControlBarButtonBase {
      $Type: "Pages$SelectButton";
      $CreationOptions: SelectButtonCreationOptions;
  }
  export interface AssociationWidgetBase extends MemberWidgetBase {
      selectorSource: SelectorSource;
      selectPageSettings: PageSettings;
      onChangeAction: ClientAction;
      sourceVariable: PageVariable | null;
  }
  export interface SelectorXPathSource extends SelectorSourceBase {
      $Type: "Pages$SelectorXPathSource";
      sortBar: GridSortBar;
      xPathConstraint: string | null;
      constrainedByRefs: DomainModels.EntityRef[];
  }
  export interface SelectorMicroflowSource extends SelectorSourceBase {
      $Type: "Pages$SelectorMicroflowSource";
      dataSourceMicroflowSettings: MicroflowSettings;
  }
  export interface SelectorSourceBase extends Primitives.ElementBase {
      getContainer(): AssociationWidget;
      delete(): void;
  }
  export interface SidebarToggleButtonCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/sidebar-toggle-button relevant section in reference guide}
   */
  export interface SidebarToggleButton extends ButtonBase {
      $Type: "Pages$SidebarToggleButton";
      $CreationOptions: SidebarToggleButtonCreationOptions;
  }
  export interface SimpleMenuBarCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/simple-menu-bar relevant section in reference guide}
   */
  export interface SimpleMenuBar extends MenuWidgetBase {
      $Type: "Pages$SimpleMenuBar";
      $CreationOptions: SimpleMenuBarCreationOptions;
      orientation: SimpleMenuBarOrientation;
  }
  export interface SingleSearchFieldBase extends SearchFieldBase {
      attributeRef: DomainModels.AttributeRef | null;
      operator: SearchFieldOperator;
  }
  export interface SnippetCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/snippet relevant section in reference guide}
   */
  export interface Snippet extends FormBaseBase {
      $Type: "Pages$Snippet";
      $CreationOptions: SnippetCreationOptions;
      widgets: Widget[];
      type: SnippetType;
      parameters: SnippetParameter[];
      variables: LocalVariable[];
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
      addSnippetParameter(options: SnippetParameterCreationOptions): Promise<SnippetParameter>;
      getSnippetParameter(name: string): SnippetParameter;
      addLocalVariable(options: LocalVariableCreationOptions): Promise<LocalVariable>;
      getLocalVariable(name: string): LocalVariable;
  }
  export interface SnippetParameterCreationOptions {
      name: string;
  }
  export interface SnippetParameter extends Primitives.ElementBase {
      $Type: "Pages$SnippetParameter";
      $CreationOptions: SnippetParameterCreationOptions;
      name: string;
      parameterType: DataTypes.DataType;
      getContainer(): Snippet;
      delete(): void;
  }
  export interface SnippetCall extends Primitives.ElementBase {
      $Type: "Pages$SnippetCall";
      snippet: string | null;
      parameterMappings: SnippetParameterMapping[];
      getContainer(): SnippetCallWidget;
      delete(): void;
      addSnippetParameterMapping(): Promise<SnippetParameterMapping>;
  }
  export interface SnippetParameterMapping extends Primitives.ElementBase {
      $Type: "Pages$SnippetParameterMapping";
      parameter: string;
      variable: PageVariable;
      getContainer(): SnippetCall;
      delete(): void;
  }
  export interface SnippetCallWidgetCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/snippet-call relevant section in reference guide}
   */
  export interface SnippetCallWidget extends WidgetBase {
      $Type: "Pages$SnippetCallWidget";
      $CreationOptions: SnippetCallWidgetCreationOptions;
      snippetCall: SnippetCall;
  }
  export interface TabContainerCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/tab-container relevant section in reference guide}
   */
  export interface TabContainer extends ConditionallyVisibleWidgetBase {
      $Type: "Pages$TabContainer";
      $CreationOptions: TabContainerCreationOptions;
      tabPages: TabPage[];
      defaultPage: string | null;
      activePageAttributeRef: DomainModels.AttributeRef | null;
      activePageSourceVariable: PageVariable | null;
      activePageOnChangeAction: ClientAction;
      addTabPage(options: TabPageCreationOptions): Promise<TabPage>;
      getTabPage(name: string): TabPage;
  }
  export interface TabPageCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/tab-container relevant section in reference guide}
   */
  export interface TabPage extends Primitives.ElementBase {
      $Type: "Pages$TabPage";
      $CreationOptions: TabPageCreationOptions;
      name: string;
      caption: Texts.Text;
      refreshOnShow: boolean;
      conditionalVisibilitySettings: ConditionalVisibilitySettings | null;
      widgets: Widget[];
      badge: ClientTemplate | null;
      getContainer(): TabContainer;
      delete(): void;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  export interface TemplateGridCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/template-grid relevant section in reference guide}
   */
  export interface TemplateGrid extends GridBase {
      $Type: "Pages$TemplateGrid";
      $CreationOptions: TemplateGridCreationOptions;
      contents: TemplateGridContents;
      numberOfRows: number;
      numberOfColumns: number;
  }
  export interface TemplateGridContents extends Primitives.ElementBase {
      $Type: "Pages$TemplateGridContents";
      widgets: Widget[];
      getContainer(): TemplateGrid;
      delete(): void;
      addPlaceholder(options: PlaceholderCreationOptions): Promise<Placeholder>;
      getPlaceholder(name: string): Placeholder;
      addTemplatePlaceholder(options: TemplatePlaceholderCreationOptions): Promise<TemplatePlaceholder>;
      getTemplatePlaceholder(name: string): TemplatePlaceholder;
      addLabel(options: LabelCreationOptions): Promise<Label>;
      getLabel(name: string): Label;
      addStaticImageViewer(options: StaticImageViewerCreationOptions): Promise<StaticImageViewer>;
      getStaticImageViewer(name: string): StaticImageViewer;
      addDivContainer(options: DivContainerCreationOptions): Promise<DivContainer>;
      getDivContainer(name: string): DivContainer;
      addTextBox(options: TextBoxCreationOptions): Promise<TextBox>;
      getTextBox(name: string): TextBox;
      addTextArea(options: TextAreaCreationOptions): Promise<TextArea>;
      getTextArea(name: string): TextArea;
      addCheckBox(options: CheckBoxCreationOptions): Promise<CheckBox>;
      getCheckBox(name: string): CheckBox;
      addRadioButtonGroup(options: RadioButtonGroupCreationOptions): Promise<RadioButtonGroup>;
      getRadioButtonGroup(name: string): RadioButtonGroup;
      addDatePicker(options: DatePickerCreationOptions): Promise<DatePicker>;
      getDatePicker(name: string): DatePicker;
      addLoginIdTextBox(options: LoginIdTextBoxCreationOptions): Promise<LoginIdTextBox>;
      getLoginIdTextBox(name: string): LoginIdTextBox;
      addPasswordTextBox(options: PasswordTextBoxCreationOptions): Promise<PasswordTextBox>;
      getPasswordTextBox(name: string): PasswordTextBox;
      addLoginButton(options: LoginButtonCreationOptions): Promise<LoginButton>;
      getLoginButton(name: string): LoginButton;
      addValidationMessage(options: ValidationMessageCreationOptions): Promise<ValidationMessage>;
      getValidationMessage(name: string): ValidationMessage;
      addTable(options: TableCreationOptions): Promise<Table>;
      getTable(name: string): Table;
      addDataView(options: DataViewCreationOptions): Promise<DataView>;
      getDataView(name: string): DataView;
      addListView(options: ListViewCreationOptions): Promise<ListView>;
      getListView(name: string): ListView;
      addActionButton(options: ActionButtonCreationOptions): Promise<ActionButton>;
      getActionButton(name: string): ActionButton;
      addDataGrid(options: DataGridCreationOptions): Promise<DataGrid>;
      getDataGrid(name: string): DataGrid;
      addDropDown(options: DropDownCreationOptions): Promise<DropDown>;
      getDropDown(name: string): DropDown;
      addDropDownButton(options: DropDownButtonCreationOptions): Promise<DropDownButton>;
      getDropDownButton(name: string): DropDownButton;
      addDynamicImageViewer(options: DynamicImageViewerCreationOptions): Promise<DynamicImageViewer>;
      getDynamicImageViewer(name: string): DynamicImageViewer;
      addDynamicText(options: DynamicTextCreationOptions): Promise<DynamicText>;
      getDynamicText(name: string): DynamicText;
      addFileManager(options: FileManagerCreationOptions): Promise<FileManager>;
      getFileManager(name: string): FileManager;
      addGroupBox(options: GroupBoxCreationOptions): Promise<GroupBox>;
      getGroupBox(name: string): GroupBox;
      addHeader(options: HeaderCreationOptions): Promise<Header>;
      getHeader(name: string): Header;
      addImageUploader(options: ImageUploaderCreationOptions): Promise<ImageUploader>;
      getImageUploader(name: string): ImageUploader;
      addInputReferenceSetSelector(options: InputReferenceSetSelectorCreationOptions): Promise<InputReferenceSetSelector>;
      getInputReferenceSetSelector(name: string): InputReferenceSetSelector;
      addLayoutGrid(options: LayoutGridCreationOptions): Promise<LayoutGrid>;
      getLayoutGrid(name: string): LayoutGrid;
      addMenuBar(options: MenuBarCreationOptions): Promise<MenuBar>;
      getMenuBar(name: string): MenuBar;
      addNavigationList(options: NavigationListCreationOptions): Promise<NavigationList>;
      getNavigationList(name: string): NavigationList;
      addNavigationTree(options: NavigationTreeCreationOptions): Promise<NavigationTree>;
      getNavigationTree(name: string): NavigationTree;
      addReferenceSelector(options: ReferenceSelectorCreationOptions): Promise<ReferenceSelector>;
      getReferenceSelector(name: string): ReferenceSelector;
      addReferenceSetSelector(options: ReferenceSetSelectorCreationOptions): Promise<ReferenceSetSelector>;
      getReferenceSetSelector(name: string): ReferenceSetSelector;
      addScrollContainer(options: ScrollContainerCreationOptions): Promise<ScrollContainer>;
      getScrollContainer(name: string): ScrollContainer;
      addSidebarToggleButton(options: SidebarToggleButtonCreationOptions): Promise<SidebarToggleButton>;
      getSidebarToggleButton(name: string): SidebarToggleButton;
      addSimpleMenuBar(options: SimpleMenuBarCreationOptions): Promise<SimpleMenuBar>;
      getSimpleMenuBar(name: string): SimpleMenuBar;
      addSnippetCallWidget(options: SnippetCallWidgetCreationOptions): Promise<SnippetCallWidget>;
      getSnippetCallWidget(name: string): SnippetCallWidget;
      addTabContainer(options: TabContainerCreationOptions): Promise<TabContainer>;
      getTabContainer(name: string): TabContainer;
      addTemplateGrid(options: TemplateGridCreationOptions): Promise<TemplateGrid>;
      getTemplateGrid(name: string): TemplateGrid;
      addTitle(options: TitleCreationOptions): Promise<Title>;
      getTitle(name: string): Title;
  }
  export interface TitleCreationOptions {
      name: string;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/page-title relevant section in reference guide}
   */
  export interface Title extends ConditionallyVisibleWidgetBase {
      $Type: "Pages$Title";
      $CreationOptions: TitleCreationOptions;
      nativeAccessibilitySettings: AccessibilitySettings | null;
  }
  export interface WorkflowTemplateTypeBase extends TemplateTypeBase {
  }
  export interface UserTaskTemplateType extends WorkflowTemplateTypeBase {
      $Type: "Pages$UserTaskTemplateType";
  }
  export interface WorkflowOverviewTemplateType extends WorkflowTemplateTypeBase {
      $Type: "Pages$WorkflowOverviewTemplateType";
  }
  export interface CallWorkflowClientAction extends ClientActionBase {
      $Type: "Pages$CallWorkflowClientAction";
      workflow: string | null;
      closePage: boolean;
      confirmationInfo: ConfirmationInfo | null;
  }
  export interface OpenUserTaskClientAction extends ClientActionBase {
      $Type: "Pages$OpenUserTaskClientAction";
      assignOnOpen: boolean;
      openWhenAssigned: boolean;
  }
  export interface OpenWorkflowClientAction extends ClientActionBase {
      $Type: "Pages$OpenWorkflowClientAction";
      defaultPage: string | null;
  }
  export interface SetTaskOutcomeClientAction extends ClientActionBase {
      $Type: "Pages$SetTaskOutcomeClientAction";
      outcomeValue: string;
      closePage: boolean;
      commit: boolean;
  }
  export type FormLocation = "Content" | "Popup" | "ModalPopup";
  export type ProgressBarType = "None" | "NonBlocking" | "Blocking";
  export type FormValidations = "None" | "Widget" | "All";
  export type SubmitBehaviourType = "OnEndEditing" | "WhileEditing";
  export type AutocompletePurposeType = "On" | "Off" | "FullName" | "HonorificPrefix" | "GivenName" | "AdditionalName" | "FamilyName" | "HonorificSuffix" | "Nickname" | "JobTitle" | "Username" | "NewPassword" | "CurrentPassword" | "CompanyName" | "StreetAddress" | "StreetAddressLine1" | "StreetAddressLine2" | "StreetAddressLine3" | "AddressLevel4" | "AddressLevel3" | "AddressLevel2" | "AddressLevel1" | "CountryCode" | "CountryName" | "PostalCode" | "CreditCardFullName" | "CreditCardGivenName" | "CreditCardAdditionalName" | "CreditCardFamilyName" | "CreditCardNumber" | "CreditCardExpiration" | "CreditCardExpirationMonth" | "CreditCardExpirationYear" | "CreditCardSecurityCode" | "CreditCardType" | "TransactionCurrency" | "TransactionAmount" | "Language" | "Birthday" | "DayOfBirth" | "MonthOfBirth" | "YearOfBirth" | "Sex" | "Url" | "Photo" | "TelephoneNumber" | "TelephoneCountryCode" | "TelephoneWithoutCountryCode" | "TelephoneAreaCode" | "TelephoneLocal" | "TelephoneLocalPrefix" | "TelephoneLocalSuffix" | "TelephoneExtension" | "Email" | "InstantMessageProtocol";
  export type KeyboardType = "NumberPad" | "DecimalPad" | "EmailAddress" | "PhonePad" | "URL" | "Default";
  export type LabelPosition = "Default" | "BeforeControl" | "AfterControl";
  export type NativeRenderMode = "CheckBox" | "Switch";
  export type EnumFormat = "Text" | "Image";
  export type DateFormat = "Date" | "Time" | "DateTime" | "Custom";
  export type ReadOnlyStyle = "Inherit" | "Control" | "Text";
  export type EditableEnum = "Always" | "Never" | "Conditional";
  export type UnitEnum = "Weight" | "Pixels";
  export type DataViewReadOnlyStyle = "Control" | "Text";
  export type ScrollDirection = "Vertical" | "Horizontal";
  export type SortDirection = "Ascending" | "Descending";
  export type RenderType = "Button" | "Link";
  export type ButtonStyle = "Default" | "Inverse" | "Primary" | "Info" | "Success" | "Warning" | "Danger";
  export type ButtonAriaRoleType = "Button" | "Link" | "Checkbox" | "Radio" | "Tab" | "MenuItem" | "MenuItemCheckbox" | "MenuItemRadio" | "Option" | "Switch" | "TreeItem";
  export type NativeTextStyle = "Text" | "Heading1" | "Heading2" | "Heading3" | "Heading4" | "Heading5" | "Heading6";
  export type ToggleMode = "None" | "PushContentAside" | "SlideOverContent" | "ShrinkContentInitiallyOpen" | "ShrinkContentInitiallyClosed";
  export type SnippetType = "Web" | "Native";
  export type AggregateFunction = "None" | "Average" | "Maximum" | "Minimum" | "Sum" | "Count";
  export type AlignmentEnum = "Left" | "Center" | "Right";
  export type LayoutGridAlignment = "None" | "Start" | "Center" | "End";
  export type ClickTypeType = "Single" | "Double";
  export type ShowPagingBarType = "YesWithTotalCount" | "YesWithoutTotalCount" | "No";
  export type ContainerWidth = "FullWidth" | "FixedWidth";
  export type FileManagerType = "Upload" | "Download" | "Both";
  export type GridSelectionMode = "None" | "Single" | "SingleAndMaintain" | "Multi" | "SimpleMulti";
  export type GroupBoxCollapsible = "No" | "YesInitiallyExpanded" | "YesInitiallyCollapsed";
  export type ImageSizeUnit = "Auto" | "Pixels" | "Percentage";
  export type LayoutModeType = "Headline" | "Sidebar";
  export type LayoutType = "Responsive" | "Tablet" | "Phone" | "ModalPopup" | "Popup" | "Legacy";
  export type NativeLayoutType = "Default" | "TopLevel" | "Popup";
  export type LinkType = "Web" | "Email" | "Call" | "Text";
  export type NewButtonEditLocation = "InlineAtTop" | "InlineAtBottom" | "Form";
  export type ReferenceSelectorRenderModeType = "Form" | "DropDown";
  export type ScrollBehavior = "PerRegion" | "FullWidget";
  export type SearchBarTypeEnum = "None" | "FoldableOpen" | "FoldableClosed" | "AlwaysOpen";
  export type SearchFieldOperator = "Contains" | "StartsWith" | "Greater" | "GreaterOrEqual" | "Equal" | "NotEqual" | "SmallerOrEqual" | "Smaller";
  export type SearchFieldType = "Normal" | "Hidden" | "ReadOnly";
  export type SelectionType = "SelectPage" | "SelectAll";
  export type SidebarToggleMode = "PushContentAside" | "SlideOverContent" | "ShrinkContent";
  export type SidebarToggleRegion = "Left" | "Right";
  export type SimpleMenuBarOrientation = "Horizontal" | "Vertical";
  export type SizeMode = "Auto" | "Pixels" | "Percentage";
  export type TextRenderMode = "Text" | "Paragraph" | "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  export type ContainerRenderMode = "Div" | "Section" | "Article" | "Header" | "Footer" | "Main" | "Nav" | "Aside" | "Hgroup" | "Address";
  export type GroupBoxRenderMode = "Div" | "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
}

/**
* Represents a point on the screen with x and y coordinates.
*/
declare type Point = {
  x: number;
  y: number;
};

export declare namespace Primitives {
  /**
   * An element is part of a Mendix model and all elements together form the logic of the model.
   * Elements may contain other elements. An element always has a container element, which is its parent.
   * The root of an element tree is always a unit.
   */
  export interface ElementBase {
      /**
       * The unique id of the element.
       */
      $ID: string;
      /**
       * The type of the element.
       */
      $Type: string;
      /**
       * Options to pass during the element creation
       */
      $CreationOptions?: unknown;
  }
  /**
   * A unit is a container of elements, it can not contain other units.
   */
  export interface UnitBase extends ElementBase {
  }
  /**
   * Info about a unit.
   */
  export interface UnitInfo {
      /**
       * The unique id of the element.
       */
      $ID: string;
      /**
       * The type of the element.
       */
      $Type: string;
      /**
       * The name of the module containing the unit.
       */
      moduleName?: string;
      /**
       * The name of the unit.
       */
      name?: string;
  }
  /**
   * A spatial coordinate pair.
   */
  export interface Location {
      /**
       * The x-coordinate.
       */
      x: number;
      /**
       * The y-coordinate.
       */
      y: number;
  }
}

declare type ProblemsApiEventMap = {
  activeProblemsChanged: {};
};

declare type ProjectManagerEventMap = {
  documentsChanged: {
      documentIds: string[];
      source: ChangeSource;
  };
  documentAdded: {
      documentId: string;
      documentQualifiedName?: string;
      addedByUser: boolean;
  };
  moduleAdded: {
      moduleName: string;
  };
};

/**
* This operation removes an element.
*/
declare interface RemoveElementOperation extends OperationBase {
  type: "removeElement";
  /**
   * The id of the unit containing the element to remove.
   */
  unitId: string;
  /**
   * The id of the element to remove.
   */
  elementId: string;
}

/**
* This operation sets a property to the specified value.
*/
declare interface SetPropertyOperation<T = string> extends OperationBase {
  type: "setProperty";
  /**
   * The id of the unit containing the property to set.
   */
  unitId: string;
  /**
   * The id of the parent contaning the element containing the property to set.
   */
  targetId: string;
  /**
   * The name of the property to set.
   */
  propertyName: string;
  /**
   * The value to set the property.
   */
  value: T;
}

/**
* All APIs available in Studio Pro
*/
export declare const studioPro: {
  /**
   * UI related APIs
   */
  ui: {
      /**
       * API for showing message boxes
       */
      messageBoxes: IMessageBoxApi;
      /**
       * API for working with (document) tabs
       */
      tabs: ITabApi;
      /**
       * API for working with dockable panes
       */
      panes: IDockablePaneApi;
      /**
       * API for working with the Extensions menu
       */
      extensionsMenu: IExtensionsMenuApi;
  };
  /**
   * APIs for working with the app data, such as the app model and the files in the app directory
   */
  app: {
      /**
       * API for working with files in the app directory
       */
      files: IAppFilesApi;
      /**
       * APIs for working with the app model
       */
      model: {
          /**
           * API for working with domain models
           */
          domainModels: ModelAccessWithComponent<IDomainModelApi, DomainModels.DomainModel>;
          /**
           * API for working with pages
           */
          pages: ModelAccessWithComponent<IPageApi, Pages.Page>;
          /**
           * API for working with enumerations
           */
          enumerations: ModelAccessWithComponent<IEnumerationApi, Enumerations.Enumeration>;
      };
  };
};

export declare type TabHandle = {
  tabId: string;
};

export declare type TabInfo = {
  title: string;
  icon: string;
};

export declare namespace Texts {
  /**
   * See: {@link https://docs.mendix.com/refguide/translatable-texts relevant section in reference guide}
   */
  export interface Text extends Primitives.ElementBase {
      $Type: "Texts$Text";
      translations: Translation[];
      addTranslation(): Promise<Translation>;
  }
  export interface Translation extends Primitives.ElementBase {
      $Type: "Texts$Translation";
      languageCode: string;
      text: string;
      getContainer(): Text;
      delete(): void;
  }
  export interface SystemText extends Primitives.ElementBase {
      $Type: "Texts$SystemText";
      text: Text;
      key: string;
      getContainer(): SystemTextCollection;
      delete(): void;
  }
  /**
   * See: {@link https://docs.mendix.com/refguide/system-texts relevant section in reference guide}
   */
  export interface SystemTextCollection extends Primitives.UnitBase {
      $Type: "Texts$SystemTextCollection";
      systemTexts: SystemText[];
      addSystemText(): Promise<SystemText>;
  }
}

/**
* Specifies a piece of UI that can be shown in a tab, pane, dialog, etc.
*/
export declare type UISpec = {
  /**
   * The name of the component that contains the UI.
   */
  componentName: string;
  /**
   * The UI entry point name to look up in the component manifest.
   */
  uiEntrypoint: string;
  /**
   * An optional set of query string parameters to pass when opening the UI.
   */
  queryParams?: {
      [key: string]: string;
  };
};

declare type UndoRedoSource = {
  type: "UndoRedo";
};

declare type UnspecifiedSource = {
  type: "Unspecified";
};

export declare namespace Url {
  export type UrlSegment = StaticUrlSegment;
  export interface UrlSegmentBase extends Primitives.ElementBase {
  }
  export interface StaticUrlSegment extends UrlSegmentBase {
      $Type: "Url$StaticUrlSegment";
      segment: string;
  }
}

declare type WebModelSource = {
  type: "WebModel";
  contextId: string;
};

export { }


