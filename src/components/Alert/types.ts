type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  title: string;
  description?: string;
  type?: AlertType;
  onClose?: () => void;
  closable?: boolean;
}