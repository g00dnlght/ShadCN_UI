import { Terminal } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AlertDemo() {
  return (
    <Alert variant="destructive" className="flex">
      <Terminal className="w-4 h-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>This website is a work-in-progress. (v2.3)</AlertDescription>
    </Alert>
  );
}
