define(
    [
        WidgetsPath + "Grid/GridModelFactory",
        WidgetsPath + "Grid/GridViewFactory",
        LoadHtml + ScreensPath + "HomeScreen.html"
    ],
    function
        (
            gridModelFactory,
            gridViewFactory,
            homeTemplate
        )
    {

        var create = function(runtime){

            var gridResource = {
                Rows: [
                    {
                        Id: "Row1",
                        Tiles: [
                            {
                                Id: "Tile1",
                                Name: "One",
                                Content: "This is tile 1",
                                Rank: 0
                            },
                            {
                                Id: "Tile2",
                                Name: "Two",
                                Content: "This is tile 2",
                                Rank: 0
                            },
                            {
                                Id: "Tile3",
                                Name: "Three",
                                Content: "This is tile 3",
                                Rank: 0
                            },
                            {
                                Id: "Tile4",
                                Name: "Four",
                                Content: "This is tile 4",
                                Rank: 0
                            }
                        ]
                    },
                    {
                        Id: "Row2",
                        Tiles: [
                            {
                                Id: "Tile5",
                                Name: "Five",
                                Content: "This is tile 5",
                                Rank: 0
                            },
                            {
                                Id: "Tile6",
                                Name: "Six",
                                Content: "This is tile 6",
                                Rank: 0
                            },
                            {
                                Id: "Tile7",
                                Name: "Seven",
                                Content: "This is tile 7",
                                Rank: 0
                            },
                            {
                                Id: "Tile8",
                                Name: "Eight",
                                Content: "This is tile 8",
                                Rank: 0
                            }
                        ]
                    },
                    {
                        Id: "Row3",
                        Tiles: [
                            {
                                Id: "Tile9",
                                Name: "Nine",
                                Content: "This is tile 9",
                                Rank: 0
                            },
                            {
                                Id: "Tile10",
                                Name: "Ten",
                                Content: "This is tile 11",
                                Rank: 0
                            },
                            {
                                Id: "Tile11",
                                Name: "Eleven",
                                Content: "This is tile 11",
                                Rank: 0
                            },
                            {
                                Id: "Tile12",
                                Name: "Twelve",
                                Content: "This is tile 12",
                                Rank: 0
                            }
                        ]
                    }
                ]
            }; //Pretend this came from the web server

            var render = function(){
                $("#HomeScreen").append(homeTemplate);
                runtime.Views.Grid.Render();
            };

            var homeScreen = {
                Render: render
            }

            gridViewFactory.Create(runtime, gridResource);
            gridModelFactory.Create(runtime, gridResource);

            runtime.Screens.Home = homeScreen;


            return homeScreen;

        };

        return {
            Create: create
        }

    }
);