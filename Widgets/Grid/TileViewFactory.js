define(
    [
        "Libraries/Rivets/rivets",
        LoadHtml + WidgetsPath + "Grid/TileTemplate.html"
    ],
    function(rivets, widgetHtml){

        var create = function(runtime){

            var render = function() {
                var widgetContainer = $("#TileView");
                widgetContainer.append(widgetHtml);
            };

            var tileView = {
                Render:render
            };

            runtime.Views.TileView = tileView;

            return tileView;

        };

        return {
            Create: create
        };

    }
);