define(
    [
        "AppBus"
    ],
    function(appBus){

        var create = function(runtime, tileResource){

            var tileModel = tileResource;

            tileModel.Promote = function(benefactorId){
                if (tileModel.Id === benefactorId) return;
                tileModel.Rank = tileModel.Rank + 1;
            };

            tileModel.Demote = function(antagonistId){
                if (tileModel.Id === antagonistId) return;
                tileModel.Rank = tileModel.Rank - 1;
            };

            tileModel.PublishGiveButtonClicked = function(){
                var giveButtonClicked = {
                    Name: "Tile.GiveButtonClicked",
                    Arguments: [tileModel.Id]
                };
                appBus.Publish(giveButtonClicked);
            };

            tileModel.PublishTakeButtonClicked = function(){
                var takeButtonClicked = {
                    Name: "Tile.TakeButtonClicked",
                    Arguments: [tileModel.Id]
                };
                appBus.Publish(takeButtonClicked);
            };

            if (!runtime.Models.Tiles){
                runtime.Models.Tiles = [];
            }
            runtime.Models.Tiles.push(tileModel);

            return tileModel;

        };

        return {
            Create: create
        };

    }
);