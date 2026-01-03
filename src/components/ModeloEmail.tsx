interface EmailTemplateProps {
  nome: string;
  detalhe: string;
  dataHoraIda: string;
  dataHoraVolta: string;
  lotacao: number;
  origem: string;
  destino: string;
  contato: string;
}

export function EmailTemplate({
  nome,
  detalhe,
  dataHoraIda,
  dataHoraVolta,
  lotacao,
  origem,
  destino,
  contato,
}: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "14px" }}>
      <p>
        Olá, <strong>{nome}</strong>,
      </p>

      <p>Sua solicitação de demanda foi recebida com sucesso.</p>

      <p>
        <strong>📌 Detalhes da demanda:</strong>
        <br />
        <pre style={{ fontFamily: "Arial", whiteSpace: "pre-wrap" }}>
          {detalhe}
        </pre>
      </p>

      <p>
        <strong>Data de Ida:</strong> {dataHoraIda}
        <br />
        <strong>Data de Volta:</strong> {dataHoraVolta}
      </p>

      <p>
        <strong>Lotação:</strong> {lotacao}
        <br />
        <strong>Origem:</strong> {origem}
        <br />
        <strong>Destino:</strong> {destino}
        <br />
        <strong>Contato:</strong> {contato}
      </p>

      <p>
        Nossa equipe irá analisar a solicitação e, em breve, você receberá novas
        informações.
      </p>

      <p>
        Atenciosamente,
        <br />
        <strong>Equipe de Gestão de Transporte</strong>
      </p>
    </div>
  );
}
