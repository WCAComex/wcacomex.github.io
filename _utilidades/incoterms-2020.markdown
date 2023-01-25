---
title: Incoterms 2020
date: 2023-01-23 18:30:00 -02:00
cor: "#1E90FF"
---

INCOTERMS® 2020

| TERMOS <br /> Meio de Transporte | INCOTERM                       | Embalagem e Conferência | Carregamento nas Instalações do Vendedor | Transporte na Origem
(pré-embarque) | Desembaraço Aduaneiro na Origem | Despesas de Terminal na Origem | Transporte Internacional | Seguro de Transporte Internacional | Despesas de Terminal no Destino | Desembaraço Aduaneiro no Destino | Transporte no Destino (Pós-embarque) | Descarga nas Instalações do Comprador |
| -------------------------------- | ------------------------------ | ----------------------- | ---------------------------------------- | ----------------------------------- | ------------------------------- | ------------------------------ | ------------------------ | ---------------------------------- | ------------------------------- | -------------------------------- | ------------------------------------ | ------------------------------------- |
| EXW <br /> Qualquer Meio         | Ex Works                       | Vendedor                | Comprador                                | Comprador                           | Comprador                       | Comprador                      | Comprador                | Comprador \*                       | Comprador                       | Comprador                        | Comprador                            | Comprador                             |
| FCA <br /> Qualquer Meio         | Free Carrier                   | Vendedor                | Vendedor                                 | Vendedor                            | Vendedor                        | Comprador                      | Comprador                | Comprador \*                       | Comprador                       | Comprador                        | Comprador                            | Comprador                             |
| FAS <br /> Marítimo              | Free Along Side                | Vendedor                | Vendedor                                 | Vendedor                            | Vendedor                        | Comprador                      | Comprador                | Comprador \*                       | Comprador                       | Comprador                        | Comprador                            | Comprador                             |
| FOB <br /> Marítimo              | Free On Board                  | Vendedor                | Vendedor                                 | Vendedor                            | Vendedor                        | Vendedor                       | Comprador                | Comprador \*                       | Comprador                       | Comprador                        | Comprador                            | Comprador                             |
| CPT <br /> Qualquer Meio         | Carriage Paid To               | Vendedor                | Vendedor                                 | Vendedor                            | Vendedor                        | Vendedor                       | Vendedor                 | Comprador \*                       | Comprador                       | Comprador                        | Comprador                            | Comprador                             |
| CFR <br /> Marítimo              | Cost and Freight               | Vendedor                | Vendedor                                 | Vendedor                            | Vendedor                        | Vendedor                       | Vendedor                 | Comprador \*                       | Comprador                       | Comprador                        | Comprador                            | Comprador                             |
| CIP <br /> Qualquer Meio         | Carriage and Insurance Paid to | Vendedor                | Vendedor                                 | Vendedor                            | Vendedor                        | Vendedor                       | Vendedor                 | Vendedor                           | Comprador                       | Comprador                        | Comprador                            | Comprador                             |
| CIF <br /> Marítimo              | Cost Insurance and Freight     | Vendedor                | Vendedor                                 | Vendedor                            | Vendedor                        | Vendedor                       | Vendedor                 | Vendedor                           | Comprador                       | Comprador                        | Comprador                            | Comprador                             |
| DAP <br /> Qualquer Meio         | Delivered at Place             | Vendedor                | Vendedor                                 | Vendedor                            | Vendedor                        | Vendedor                       | Vendedor                 | Vendedor \*\*                      | Vendedor                        | Comprador                        | Vendedor                             | Comprador                             |
| DPU <br /> Qualquer Meio         | Delivered at Place Unloaded    | Vendedor                | Vendedor                                 | Vendedor                            | Vendedor                        | Vendedor                       | Vendedor                 | Vendedor \*\*                      | Vendedor                        | Comprador                        | Comprador                            | Vendedor                              |
| DDP <br /> Qualquer Meio         | Delivered Duty Paid            | Vendedor                | Vendedor                                 | Vendedor                            | Vendedor                        | Vendedor                       | Vendedor                 | Vendedor \*\*                      | Vendedor                        | Vendedor                         | Vendedor                             | Comprador                             |
{: ^target=table .scrollable #incoterms style="font-size:.6em;text-align:center;text-transform:uppercase;" }

\*
: Não há obrigação de contratação de seguro sendo os riscos assumidos pelo Comprador.

\**
: Não há obrigação de contratação de seguro sendo os riscos assumidos pelo Vendedor.

<script>
(function(cells) {
    var colors = {
        "Vendedor": "#f7b204",
        "Comprador": "#62b8cf",
        "Ambos": "linear-gradient(to top left, #f7b204 50%, #62b8cf 50%)"
    };
    Array.prototype.forEach.call(cells, function(cell) {
        for (const key in colors) {
          if (cell.textContent.includes(key)) {
            cell.style.background = colors[key];
            cell.style.color = '#fff';
          }
        }
    });
})(document.querySelectorAll('#incoterms td'));
</script>
