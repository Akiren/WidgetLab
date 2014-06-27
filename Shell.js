define(
    [
        "AppBus",
        ScreensPath + "HomeScreenFactory"
    ],
    function(appBus, homeScreenFactory){

        var runtime = {
            Screens: {},
            Models: {},
            Services: {},
            Views: {}
        };

        var start = function(){
            create();
            interconnect();
            activate();
        };

        var create = function(){
            homeScreenFactory.Create(runtime);
        };

        var interconnect = function(){

            var tileModelIndex;
            var tileModel;

            for (tileModelIndex = 0; tileModelIndex < runtime.Models.Tiles.length; tileModelIndex++){
                tileModel = runtime.Models.Tiles[tileModelIndex];
                appBus.Subscribe(tileModel.Promote).To("Tile.GiveButtonClicked");
                appBus.Subscribe(tileModel.Demote).To("Tile.TakeButtonClicked");
            }

        };

        var activate = function(){
            runtime.Screens.Home.Render();
        };

        return {
            Start: start
        };

    }
);