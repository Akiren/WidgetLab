define(
    [
        WidgetsPath + "Grid/RowModelFactory"
    ],
    function(rowModelFactory){

        var create = function(runtime, gridResource){

            var rowResource;
            var rowResourceIndex;
            var gridModel = gridResource; //Placeholder for future model functionality

            for(rowResourceIndex = 0; rowResourceIndex < gridResource.Rows.length; rowResourceIndex++){
                rowResource = gridResource.Rows[rowResourceIndex];
                rowModelFactory.Create(runtime, rowResource);
            }

            runtime.Models.Grid = gridModel;

        };

        return {
            Create: create
        };

    }
);