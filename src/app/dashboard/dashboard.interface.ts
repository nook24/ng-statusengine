export interface DashboardRoot {
  number_of_monitored_hosts: number
  number_of_monitored_services: number
  hoststatus_overview: HoststatusOverview
  servicestatus_overview: ServicestatusOverview
  number_of_service_problems: number
}

export interface HoststatusOverview {
  up: number
  down: number
  unreachable: number
}

export interface ServicestatusOverview {
  ok: number
  warning: number
  critical: number
  unknown: number
}
