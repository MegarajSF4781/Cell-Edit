ej.treegrid.TreeGrid.Inject(ej.treegrid.InfiniteScroll, ej.treegrid.Page, ej.treegrid.VirtualScroll);

virtualScrollData = [];
parentMap = new Map();

virtualData = [];
    function dataSource() {
        var parent = -1;
        var parentId = null;
        var names = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',
            'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
            'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
            'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
            'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
            'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
            'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
        for (var i = 0; i < 1000; i++) {
            if (i % 5 === 0) {
                parent = i;
            }
            if (i % 5 !== 0) {
                var crew = 'Crew';
                var num = isNaN((virtualData.length % parent) - 1) ? 0 : (virtualData.length % parent) - 1;
                virtualData[num][crew].push({
                    'TaskID': i + 1,
                    'FIELD1': names[i % 100],
                    'FIELD2': 1967 + (i % 10),
                    'FIELD3': (i % 2 == 0) ? 395 + 2 : (i % 5 == 0) ? 395 + 1 : 395 + 25,
                    'FIELD4': (i % 2 == 0) ? 87 + 2 : (i % 5 == 0) ? 87 + 1 : 87 + 15,
                });
            }
            else {
                virtualData.push({
                    'TaskID': i + 1,
                    'Crew': [],
                    'FIELD1': names[i % 100],
                    'FIELD2': 1967 + (i % 10),
                    'FIELD3': (i % 3 == 0) ? 395 + (i + 6) : (i % 4 == 0) ? 395 + (i + 4) : 395 + (i + 13),
                    'FIELD4': (i % 3 == 0) ? 87 + (i + 3) : (i % 4 == 0) ? 87 + (i + 2) : 87 + (i + 12),

                });
            }
        }
    }
if (virtualData.length <= 0) {
    dataSource();
}

var treegrid = new ej.treegrid.TreeGrid({
    dataSource: virtualData,
    allowPaging: true,
    treeColumnIndex: 1,
    height: 400,
    childMapping: 'Crew',
    editSettings: {allowAdding:true, allowEditing: true, allowDeleting:true, mode: 'Cell'},
    allowFiltering: true,
    allowSorting: true,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel', 'Search'],
    columns: [
        { field: 'TaskID', headerText: 'Player Jersey', width: 140, textAlign: 'right',isPrimaryKey:true },
        { field: 'FIELD1', headerText: 'Player Name', width: 140 },
        { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'right' },
        { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'right' },
        { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'right' }
    ]
});
treegrid.appendTo('#TreeGrid');
var virtual = new ej.buttons.Button();
virtual.appendTo('#virtual');
document.getElementById('virtual').addEventListener('click', function () {
    treegrid.enableVirtualization = true;
    treegrid.allowPaging = false;
    treegrid.enableInfiniteScrolling = false;
})

var infinite = new ej.buttons.Button();
infinite.appendTo('#infinite');
document.getElementById('infinite').addEventListener('click', function () {
    treegrid.enableVirtualization = false;
    treegrid.allowPaging = false;
    treegrid.enableInfiniteScrolling = true;
})

var page = new ej.buttons.Button();
page.appendTo('#page');
document.getElementById('page').addEventListener('click', function () {
    treegrid.enableVirtualization = false;
    treegrid.allowPaging = true;
    treegrid.enableInfiniteScrolling = false;
})