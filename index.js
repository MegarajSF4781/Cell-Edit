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
                // visible: false,
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
                editType: 'dropdownedit',
                validationRules: { required: true }
            },
            {
                field: 'Region',
                headerText: 'Region',
                width: '180',
                editType: 'dropdownedit',
                validationRules: { required: true }
            },
            // {
            //     field: 'Environment',
            //     headerText: 'Environment',
            //     width: '140',
            // },
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
                editType: 'dropdownedit',
                validationRules: { required: true }
            }      
        ]
});
treegrid.appendTo('#TreeGrid');

var radioButton = new ej.buttons.RadioButton({ label: 'Paging', name: 'scrollmode', value: 'paging', checked: true });
radioButton.appendTo('#radio1');

radioButton = new ej.buttons.RadioButton({ label: 'Virtualization', name: 'scrollmode', value: 'virtual' });
radioButton.appendTo('#radio2');

radioButton = new ej.buttons.RadioButton({ label: 'Infinite Scrolling', name: 'scrollmode', value: 'infinite' });
radioButton.appendTo('#radio3');

function applyScrollMode(mode) {
    if (mode === 'paging') {
        treegrid.enableVirtualization = false;
        treegrid.enableInfiniteScrolling = false;
        treegrid.allowPaging = true;
    } else if (mode === 'virtual') {
        treegrid.allowPaging = false;
        treegrid.enableInfiniteScrolling = false;
        treegrid.enableVirtualization = true;
    } else if (mode === 'infinite') {
        treegrid.enableVirtualization = false;
        treegrid.allowPaging = false;
        treegrid.enableInfiniteScrolling = true;
    }
}

document.querySelectorAll('input[name="scrollmode"]').forEach(function (el) {
    el.addEventListener('change', function () {
        if (el.checked) {
            applyScrollMode(el.value);
        }
    });
});