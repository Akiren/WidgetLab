define(
    [
        SharedLibraries + "Rivets/rivets",
        WidgetsPath + "Grid/RowViewFactory",
        LoadHtml + WidgetsPath + "Grid/GridTemplate.html"
    ],
    function(rivets, rowViewFactory, gridTemplate){

        var create = function(runtime, resource){

            var rowView = rowViewFactory.Create(runtime);

            var render = function() {
                var container = $("#GridView");
                container.append(gridTemplate);
                rowView.Render();
                rivets.bind(container, resource);
            };

            var gridView = {
                Render: render
            };

            runtime.Views.Grid = gridView;

            return gridView;

        };

        return {
            Create: create
        };

    }
);