import { IComponent, studioPro } from "@mendix/extensions-api";

class Main implements IComponent {
    async loaded() {
        // Add a menu item to the Extensions menu
        await studioPro.ui.extensionsMenu.add({
            menuId: "teamcenterapi.MainMenu",
            caption: "Teamcenter API Browser",
            subMenus: [
                { menuId: "teamcenterapi.ShowApiBrowser", caption: "SOA API Browser" },
            ],
        });

        // Open a tab when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            (args) => {
                if (args.menuId === "teamcenterapi.ShowApiBrowser") {
                    studioPro.ui.tabs.open(
                        {
                            title: "Teamcenter SOA API Browser",
                        },
                        {
                            componentName: "extension/teamcenterapi",
                            uiEntrypoint: "tab",
                        }
                    );
                }
            }
        );
    }
}

export const component: IComponent = new Main();
