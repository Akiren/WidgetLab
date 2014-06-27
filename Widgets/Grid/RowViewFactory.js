define(
    [
        SharedLibraries + "Rivets/rivets",
        WidgetsPath + "Grid/TileViewFactory",
        LoadHtml + WidgetsPath + "Grid/RowTemplate.html"
    ],
    function(rivets, tileViewFactory, rowTemplate){

        var create = function(runtime){

            var tileView = tileViewFactory.Create(runtime);

            var render = function() {
                var container = $("#RowView");
                container.append(rowTemplate);
                tileView.Render();
            };

            var rowView = {
                Render:render
            };

            runtime.Views.RowView = rowView;

            return rowView;

        };

        return {
            Create: create
        };

    }
);