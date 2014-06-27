define(
    [
        WidgetsPath + "Grid/TileModelFactory"
    ],
    function(tileModelFactory){

        var create = function(runtime, rowResource){

            var tileResource;
            var tileResourceIndex;
            var rowModel = rowResource; //Placeholder for future model functionality

            for(tileResourceIndex = 0; tileResourceIndex < rowResource.Tiles.length; tileResourceIndex++){
                tileResource = rowResource.Tiles[tileResourceIndex];
                tileModelFactory.Create(runtime, tileResource);
            }

            if (!runtime.Models.Rows){
                runtime.Models.Rows = [];
            }
            runtime.Models.Rows.push(rowModel);

        };

        return {
            Create: create
        };

    }
);