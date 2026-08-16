window.virtualScrollData = [];
window.parentMap = new Map();

window.VirtualdataSource = function () {
    if (window.virtualScrollData.length > 0) return; // Already generated

    var Names = [
        'Production West US - Resource Group', 'Production East US - Resource Group', 'Staging West US - Resource Group', 
        'Development East US - Resource Group', 'Analytics EU West - Resource Group', 'Security Global - Resource Group', 
        'Finance EU Central - Resource Group', 'Marketing US East - Resource Group', 'Sales Asia Pacific - Resource Group', 
        'Shared Core - Resource Group', 'API Server 01', 'API Server 02', 'Web Server 01', 'Web Server 02', 'Batch Worker 01', 
        'ETL Worker 01', 'ETL Worker 02', 'Redis Cache 01', 'Redis Cache 02', 'Background Worker 01', 'PostgreSQL Primary', 
        'PostgreSQL Replica', 'MySQL Orders', 'SQL Server BI', 'MongoDB Catalog', 'Redis Session Store', 'Cosmos DB User Profile', 
        'Analytics Warehouse', 'Time Series Metrics DB', 'Secrets Vault', 'Logs Archive Storage', 'Daily Backups Storage', 
        'Images CDN Storage', 'Data Lake Raw Zone', 'Data Lake Curated Zone', 'Temporary Scratch Storage', 'CI Artifacts Storage', 
        'Shared Documents Storage', 'Export Dumps Storage', 'ML Models Storage', 'Core Hub Virtual Network', 
        'Applications Spoke Virtual Network', 'Data Spoke Virtual Network', 'Frontend Subnet', 'Backend Subnet', 
        'Data Services Subnet', 'Frontend Network Security Group', 'Backend Network Security Group', 'Data Network Security Group', 
        'Perimeter Firewall', 'Production Kubernetes Cluster', 'Staging Kubernetes Cluster', 'Analytics Kubernetes Cluster', 
        'System Node Pool', 'General Node Pool', 'GPU Node Pool', 'Apps Namespace', 'Operations Namespace', 'Observability Namespace', 
        'Ingress Gateway', 'Public Web Load Balancer', 'Internal API Load Balancer', 'Frontend Application Gateway', 
        'Backend Application Gateway', 'Core API Gateway', 'Service Mesh Gateway', 'Edge Gateway', 'Global Traffic Manager', 
        'Private Link Endpoint', 'NAT Gateway', 'Image Resize Function', 'Data Transform Function', 'Webhook Handler Function', 
        'Scheduled Cleanup Function', 'ETL Trigger Function', 'PDF Generator Function', 'Notification Dispatcher Function', 
        'Thumbnail Generator Function', 'CSV Import Function', 'Anomaly Detector Function', 'Web Portal Application', 
        'Admin Console Application', 'Partner API Service', 'Customer API Service', 'Mobile Backend Service', 'Campaign Service', 
        'Notification Service', 'Payment Service', 'Reporting Service', 'Search Service', 'Log Analytics Workspace', 
        'Metrics Workspace', 'Alert Rules Collection', 'Uptime Probes', 'APM Insights', 'Grafana Dashboard', 'Prometheus Server', 
        'Trace Collector', 'Synthetic Tests Suite', 'SIEM Platform'
    ];
    
    var Types = ['Virtual Machine', 'Database', 'Storage', 'Network', 'Kubernetes', 'Gateway', 'Serverless', 'Application', 'Monitoring', 'Security'];
    var Families = ['Compute', 'Data', 'Storage', 'Networking', 'Containers', 'Gateway', 'Serverless', 'Application', 'Observability', 'Security'];
    var Statuses = ['Running', 'Stopped', 'Degraded', 'Maintenance'];
    var Regions = ['West US', 'East US', 'EU West', 'EU Central', 'Asia Pacific', 'South America', 'Canada Central', 'Australia East'];
    var Groups = ['RG-Production', 'RG-Staging', 'RG-Development', 'RG-Shared', 'RG-Analytics', 'RG-Security', 'RG-Finance', 'RG-Apps'];
    var Owners = ['Alice', 'Bob', 'Carlos', 'Diana', 'Ethan', 'Fatima', 'Gina', 'Hiro', 'Ivan', 'Julia'];
    var Envs = ['Production', 'Staging', 'Development'];
    var Priorities = ['Low', 'High', 'Critical'];

    var RecordID = 1220;
    for (var i = 1; i <= 2000; i++) {
        var nameIndex = (i % 100);
        var parent = {
            TaskID: ++RecordID,
            ParentID: null,
            ResourceId: Names[nameIndex],
            Name: Types[i % Types.length],
            ServiceFamily: Families[i % Families.length],
            Status: Statuses[i % Statuses.length],
            Region: Regions[i % Regions.length],
            ResourceGroup: Groups[i % Groups.length],
            Owner: Owners[i % Owners.length],
            Environment: Envs[i % Envs.length],
            StorageGb: (i % 2 === 0) ? 410 + 2 : (i % 5 === 0) ? 410 + 1 : 410 + 45,
            NetworkMbps: (i % 2 === 0) ? 67 + 2 : (i % 5 === 0) ? 67 + 1 : 67 + 6,
            MonthlyCost: (i % 2 === 0) ? 100 + 2 : (i % 5 === 0) ? 100 + 1 : 100 + 12,
            ErrorRatePpm: (i % 2 === 0) ? 35 + 2 : (i % 5 === 0) ? 24 + 1 : 45 + 12,
            RequestsPerSec: (i % 2 === 0) ? 46 + 2 : (i % 5 === 0) ? 46 + 1 : 64 + 6,
            TagsCount: (i % 2 === 0) ? 67 + 2 : (i % 5 === 0) ? 67 + 1 : 67 + 6,
            InstanceCount: (i % 2 === 0) ? 2 + 2 : (i % 5 === 0) ? 1 + 1 : 1 + 6,
            UptimeDays: (i % 2 === 0) ? 46 + 2 : (i % 5 === 0) ? 46 + 1 : 64 + 6,
            Cpu: (i % 2 === 0) ? 210 + 23 : (i % 5 === 0) ? 210 + 12 : 210 + 621,
            Memory: (i % 2 === 0) ? 300 + 533 : (i % 5 === 0) ? 300 + 321 : 300 + 699,
            Disk: (i % 2 === 0) ? 400 + 232 : (i % 5 === 0) ? 400 + 153 : 400 + 342,
            SecurityFindings: (i % 2 === 0) ? 40 + 12 : (i % 5 === 0) ? 40 + 24 : 40 + 25,
            ComplianceScore: ((i % 2 === 0) ? 1000 + 112 : (i % 5 === 0) ? 1000 + 153 : 1000 + 412) % 101,
            Priority: Priorities[i % Priorities.length]
        };
        
        window.virtualScrollData.push(parent);
        window.parentMap.set(parent.TaskID, parent);

        for (var j = 1; j <= 4; j++) {
            var childIndex = ((i + j) % 100);
            var child = {
                TaskID: ++RecordID,
                ParentID: parent.TaskID,
                ResourceId: Names[childIndex],
                Name: Types[j % Types.length],
                ServiceFamily: Families[(i + j) % Families.length],
                Status: Statuses[(i + j) % Statuses.length],
                Region: Regions[(i + j) % Regions.length],
                ResourceGroup: Groups[(i + j) % Groups.length],
                Owner: Owners[(i + j) % Owners.length],
                Environment: Envs[(i + j) % Envs.length],
                StorageGb: (j % 3 === 0) ? 410 + (j + 2) : (j % 4 === 0) ? 410 + (j + 1) : 410 + (j + 14),
                NetworkMbps: (j % 3 === 0) ? 67 + (j + 2) : (j % 4 === 0) ? 67 + (j + 1) : 67 + (j + 7),
                MonthlyCost: (j % 3 === 0) ? 76 + (j + 2) : (j % 4 === 0) ? 23 + (j + 1) : 45 + (j + 7),
                ErrorRatePpm: (j % 3 === 0) ? 87 + (j + 2) : (j % 4 === 0) ? 87 + (j + 1) : 87 + (j + 12),
                RequestsPerSec: (j % 3 === 0) ? 54 + (j + 2) : (j % 4 === 0) ? 54 + (j + 1) : 54 + (j + 12),
                TagsCount: (j % 3 === 0) ? 280 + (j + 2) : (j % 4 === 0) ? 280 + (j + 1) : 280 + (j + 12),
                InstanceCount: (j % 3 === 0) ? 12 + (j + 2) : (j % 4 === 0) ? 12 + (j + 1) : 12 + (j + 12),
                UptimeDays: (j % 3 === 0) ? 54 + (j + 2) : (j % 4 === 0) ? 53 + (j + 1) : 23 + (j + 12),
                Cpu: (j % 3 === 0) ? 210 + (j + 2) : (j % 4 === 0) ? 237 + (j + 1) : 290 + (j + 12),
                Memory: (j % 3 === 0) ? 300 + (j + 2) : (j % 4 === 0) ? 300 + (j + 1) : 300 + (j + 12),
                Disk: (j % 3 === 0) ? 400 + (j + 2) : (j % 4 === 0) ? 400 + (j + 1) : 400 + (j + 12),
                SecurityFindings: (j % 3 === 0) ? 40 + (j + 2) : (j % 4 === 0) ? 40 + (j + 1) : 40 + (j + 12),
                ComplianceScore: ((j % 3 === 0) ? 1003 + (j + 2) : (j % 4 === 0) ? 1100 + (j + 1) : 1000 + (j + 12)) % 101,
                Priority: Priorities[(i + j) % Priorities.length]
            };
            window.virtualScrollData.push(child);
            window.parentMap.set(child.TaskID, child);
        }
    }
};