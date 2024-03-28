export interface NodeIndex {
  hostname: string
  status_update_time: number
  output: string
  long_output: string
  perfdata: string
  current_state: number
  current_check_attempt: number
  max_check_attempts: number
  last_check: number
  next_check: number
  is_passive_check: number
  last_state_change: number
  last_hard_state_change: number
  last_hard_state: number
  is_hardstate: number
  last_notification: number
  next_notification: number
  notifications_enabled: number
  problem_has_been_acknowledged: boolean
  acknowledgement_type: number
  passive_checks_enabled: number
  active_checks_enabled: number
  event_handler_enabled: number
  flap_detection_enabled: number
  is_flapping: boolean
  latency: number
  execution_time: number
  scheduled_downtime_depth: number
  process_performance_data: number
  obsess_over_host: number
  normal_check_interval: number
  retry_check_interval: number
  check_timeperiod: string
  node_name: string
  last_time_up: number
  last_time_down: number
  last_time_unreachable: number
  current_notification_number: number
  percent_state_change: number
  event_handler: any
  check_command: string
  servicestatus_overview: ServicestatusOverview
}

export interface ServicestatusOverview {
  ok: number
  warning: number
  critical: number
  unknown: number
}

export interface NodesIndexParams {
  'state[0]': boolean | string,
  'state[1]': boolean | string,
  'state[2]': boolean | string,
  direction: string,
  order: string,
  hostname__like: string
  limit: number,
  offset: number
}


export interface NodeDetails {
  hoststatus: NodeDetailsHoststatus
  servicestatus: NodeDetailsServicestatus[]
  external_urls: string[]
}

export interface NodeDetailsHoststatus {
  notifications_enabled: boolean
  active_checks_enabled: boolean
  passive_checks_enabled: boolean
  flap_detection_enabled: boolean
  event_handler_enabled: boolean
  is_flapping: boolean
  is_hardstate: boolean
  problem_has_been_acknowledged: boolean
  hostname: string
  node_name: string
  current_check_attempt: number
  max_check_attempts: number
  current_state: number
  output: string
  long_output: string
  perfdata: string
  check_timeperiod: string
  normal_check_interval: number
  retry_check_interval: number
  scheduled_downtime_depth: number
  last_check: number
  next_check: number
  last_state_change: number
  status_update_time: number
}

export interface NodeDetailsServicestatus {
  notifications_enabled: boolean
  active_checks_enabled: boolean
  passive_checks_enabled: boolean
  flap_detection_enabled: boolean
  event_handler_enabled: boolean
  is_flapping: boolean
  is_hardstate: boolean
  problem_has_been_acknowledged: boolean
  hostname: string
  service_description: string
  node_name: string
  current_check_attempt: number
  max_check_attempts: number
  current_state: number
  output: string
  long_output: string
  perfdata: string
  check_timeperiod: string
  normal_check_interval: number
  retry_check_interval: number
  scheduled_downtime_depth: number
  last_check: number
  next_check: number
  last_state_change: number
}

export interface NodeChecksParams {
  'state[0]': boolean | string,
  'state[1]': boolean | string,
  'state[2]': boolean | string,
  direction: string,
  order: string,
  hostname: string,
  output__like: string
  limit: number,
  offset: number
}

export interface Nodecheck {
  is_hardstate: boolean
  hostname: string
  output: string
  state: number
  current_check_attempt: number
  max_check_attempts: number
  start_time: number
}
