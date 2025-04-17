import { componentFramework as e } from "@mendix/component-framework";
import { getModelAccessWithComponentProxy as n } from "@mendix/model-access-sdk";
const i = {
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
      domainModels: n(
        "mendix.DomainModelApi",
        "DomainModels$DomainModel"
      ),
      /**
       * API for working with pages
       */
      pages: n(
        "mendix.PageApi",
        "Pages$Page"
      ),
      /**
       * API for working with enumerations
       */
      enumerations: n(
        "mendix.EnumerationApi",
        "Enumerations$Enumeration"
      ),
      /**
       * API for working with snippets
       */
      snippets: n(
        "mendix.SnippetApi",
        "Pages$Snippet"
      ),
      /**
       * API for working with building blocks
       */
      buildingBlocks: n(
        "mendix.BuildingBlockApi",
        "Pages$BuildingBlock"
      )
    }
  }
};
class t {
  async loaded() {
    await i.ui.extensionsMenu.add({
      menuId: "teamcenterapi.MainMenu",
      caption: "Teamcenter API Browser",
      subMenus: [
        { menuId: "teamcenterapi.ShowApiBrowser", caption: "SOA API Browser" }
      ]
    }), i.ui.extensionsMenu.addEventListener(
      "menuItemActivated",
      (o) => {
        o.menuId === "teamcenterapi.ShowApiBrowser" && i.ui.tabs.open(
          {
            title: "Teamcenter SOA API Browser"
          },
          {
            componentName: "extension/teamcenterapi",
            uiEntrypoint: "tab"
          }
        );
      }
    );
  }
}
const m = new t();
export {
  m as component
};
