import * as React from "react";

interface EmailTemplateProps {
  content: string;
}

export function EmailTemplate({ content }: EmailTemplateProps) {
  return (
    <div>
      <h1>Confirmação de Solicitação</h1>
      <p>{content}</p>
    </div>
  );
}
