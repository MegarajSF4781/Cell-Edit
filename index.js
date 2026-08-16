ej.treegrid.TreeGrid.Inject(ej.treegrid.InfiniteScroll, ej.treegrid.Page, ej.treegrid.VirtualScroll, ej.treegrid.Filter, ej.treegrid.Sort);

if (window.virtualScrollData.length <= 0) {
        if (typeof (window.VirtualdataSource) === 'function') {
            window.VirtualdataSource();
        }
    }

var treegrid = new ej.treegrid.TreeGrid({
    dataSource: window.virtualScrollData,
    allowPaging: true,
    height: 400,
    clipMode: 'EllipsisWithTooltip',
    treeColumnIndex: 1,
    idMapping: 'TaskID',
    parentIdMapping: 'ParentID',
    editSettings: {allowAdding:true, allowEditing: true, allowDeleting:true, mode: 'Cell'},
    allowFiltering: true,
    allowSorting: true,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel', 'Search'],
     columns: [
            {
                field: 'TaskID',
                headerText: 'ID',
                width: '90',
                textAlign: 'Right',
                isPrimaryKey: true,
                visible: false,
            },
            {
                field: 'ResourceId',
                headerText: 'Resource',
                width: '360',
                validationRules: { required: true }
            },
            {
                field: 'Name',
                headerText: 'Type',
                width: '150'
            },
            {
                field: 'Status',
                headerText: 'Status',
                width: '210',
                textAlign: 'Center',
                validationRules: { required: true }
            },
            {
                field: 'Region',
                headerText: 'Region',
                width: '180',
                validationRules: { required: true }
            },
            {
                field: 'Environment',
                headerText: 'Environment',
                width: '140',
            },
            {
                field: 'MonthlyCost',
                headerText: 'Monthly Cost ($)',
                width: '130',
                textAlign: 'Right',
                format: 'C0',
                type: 'number'
            },
            {
                field: 'Cpu',
                headerText: 'CPU (%)',
                width: '120',
                textAlign: 'Right',
                format: 'N0',
                type: 'number'
            },
            {
                field: 'Memory',
                headerText: 'Memory (%)',
                width: '110',
                textAlign: 'Right',
                format: 'N0',
                type: 'number'
            },
            {
                field: 'Disk',
                headerText: 'Disk (%)',
                width: '110',
                textAlign: 'Right',
                format: 'N0',
                type: 'number'
            },
            {
                field: 'InstanceCount',
                headerText: 'Instances',
                width: '110',
                textAlign: 'Right',
                format: 'N0',
                type: 'number'
            },
            {
                field: 'Priority',
                headerText: 'Priority',
                width: '130',
                textAlign: 'Left',
                validationRules: { required: true }
            }      
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