export interface MetricsValue {
    caption?: string;
    value: string | number;
    hint?: string;
    actionIconClass?: string;
    actionIconHint?: string;
    onClick?: () => void;
}