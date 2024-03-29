---
title: Incoterms 2020
date: 2023-01-23 18:30:00 -02:00
icone: shipping
cor: "#1E90FF"
---

<style>
  #incoterms td:first-of-type, #incoterms td:first-of-type + td {
    background-color: #b9bebf;
    color: #fff;
  }
</style>

<div markdown="1" class="wrapper" style="max-width: 1600px;">
| **T E R M O S** <br/> Meio de Transporte | **I N C O T E R M S**                | Embalagem e Conferência | Carregamento nas Instalações <br/> do Vendedor | Transporte na Origem <br/> (pré-embarque) | Desembaraço Aduaneiro <br/> na Origem | Despesas de Terminal <br/> na Origem | Transporte Internacional | Seguro de <br/> Transporte Internacional      | Despesas de Terminal <br/> no Destino | Desembaraço Aduaneiro <br/> no Destino | Transporte no Destino <br/> (Pós-embarque) | Descarga nas Instalações <br/> do Comprador |
| ---------------------------------------- | ------------------------------------ | ----------------------- | ---------------------------------------------- | ----------------------------------------- | ------------------------------------- | ------------------------------------ | ------------------------ | --------------------------------------------- | ------------------------------------- | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| **EXW** <br/> Qualquer Meio              | Ex Works                             | Vendedor                | Comprador                                      | Comprador                                 | Comprador                             | Comprador                            | Comprador                | Comprador <span data-text="asterisk">*</span> | Comprador                             | Comprador                              | Comprador                                  | Comprador                                   |
| **FCA** <br/> Qualquer Meio              | Free Carrier                         | Vendedor                | Vendedor                                       | Vendedor                                  | Vendedor                              | Comprador                            | Comprador                | Comprador <span data-text="asterisk">*</span> | Comprador                             | Comprador                              | Comprador                                  | Comprador                                   |
| **FAS** <br/> Marítimo                   | Free Along Side                      | Vendedor                | Vendedor                                       | Vendedor                                  | Vendedor                              | Comprador                            | Comprador                | Comprador <span data-text="asterisk">*</span> | Comprador                             | Comprador                              | Comprador                                  | Comprador                                   |
| **FOB** <br/> Marítimo                   | Free On Board                        | Vendedor                | Vendedor                                       | Vendedor                                  | Vendedor                              | Vendedor                             | Comprador                | Comprador <span data-text="asterisk">*</span> | Comprador                             | Comprador                              | Comprador                                  | Comprador                                   |
| **CPT** <br/> Qualquer Meio              | Carriage Paid To                     | Vendedor                | Vendedor                                       | Vendedor                                  | Vendedor                              | Vendedor                             | Vendedor                 | Comprador <span data-text="asterisk">*</span> | Comprador                             | Comprador                              | Comprador                                  | Comprador                                   |
| **CFR** <br/> Marítimo                   | Cost and Freight                     | Vendedor                | Vendedor                                       | Vendedor                                  | Vendedor                              | Vendedor                             | Vendedor                 | Comprador <span data-text="asterisk">*</span> | Comprador                             | Comprador                              | Comprador                                  | Comprador                                   |
| **CIP** <br/> Qualquer Meio              | Carriage and Insurance <br/> Paid to | Vendedor                | Vendedor                                       | Vendedor                                  | Vendedor                              | Vendedor                             | Vendedor                 | Vendedor                                      | Comprador                             | Comprador                              | Comprador                                  | Comprador                                   |
| **CIF** <br/> Marítimo                   | Cost Insurance and Freight           | Vendedor                | Vendedor                                       | Vendedor                                  | Vendedor                              | Vendedor                             | Vendedor                 | Vendedor                                      | Comprador                             | Comprador                              | Comprador                                  | Comprador                                   |
| **DAP** <br/> Qualquer Meio              | Delivered at Place                   | Vendedor                | Vendedor                                       | Vendedor                                  | Vendedor                              | Vendedor                             | Vendedor                 | Vendedor <span data-text="asterisk">**</span> | Vendedor                              | Comprador                              | Vendedor                                   | Comprador                                   |
| **DPU** <br/> Qualquer Meio              | Delivered at Place Unloaded          | Vendedor                | Vendedor                                       | Vendedor                                  | Vendedor                              | Vendedor                             | Vendedor                 | Vendedor <span data-text="asterisk">**</span> | Vendedor                              | Comprador                              | Comprador                                  | Vendedor                                    |
| **DDP** <br/> Qualquer Meio              | Delivered Duty Paid                  | Vendedor                | Vendedor                                       | Vendedor                                  | Vendedor                              | Vendedor                             | Vendedor                 | Vendedor <span data-text="asterisk">**</span> | Vendedor                              | Vendedor                               | Vendedor                                   | Comprador                                   |
{: ^target=table .scrollable #incoterms style="font-size:.7em;text-align:center;text-transform:uppercase;" }

  <span data-text="asterisk">*</span>
  Não há obrigação de contratação de seguro sendo os riscos assumidos pelo Comprador.
  <span data-text="asterisk">**</span>
  Não há obrigação de contratação de seguro sendo os riscos assumidos pelo Vendedor.
</div>

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