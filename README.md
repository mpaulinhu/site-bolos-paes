# 🧁 Cida Tavares — site de bolos e pães

Site de uma página só, feito em HTML/CSS/JavaScript puro. Não precisa instalar nada,
não precisa de build, não precisa de banco de dados. É só abrir o `index.html`.

---

## ✏️ Como trocar as informações

### 1. O nome da loja

O nome atual é **Cida Tavares** e aparece em **4 lugares** no `index.html`. Se um dia
quiser mudar, abra o arquivo num editor de texto, use "Localizar e substituir"
(Ctrl+H) e troque `Cida Tavares` pelo nome novo.

Um deles é o `<title>` — é o que aparece na aba do navegador.

### 2. O número do WhatsApp

Abra o `script.js`. Está logo nas primeiras linhas:

```js
const WHATSAPP = '5511949544737';   // DDI + DDD + número, só dígitos
```

Formato: `55` (Brasil) + `11` (DDD) + número, **sem espaço, sem traço, sem parêntese**.

Pronto — **todos** os botões verdes do site passam a apontar pro número novo,
cada um já com uma mensagem escrita ("Queria encomendar um Bolo de cenoura", etc).

### 3. Os produtos, preços e descrições

No `index.html`, cada produto é um bloco `<article class="card">`. Para mudar um,
edite o texto entre as tags:

```html
<div class="card-top">
  <h4>Bolo de cenoura</h4>       <!-- nome -->
  <span class="price">R$ 45</span> <!-- preço -->
</div>
<p>Massa fofinha com cobertura...</p>  <!-- descrição -->
```

Para **adicionar** um produto novo: copie um bloco `<article>` inteiro (do
`<article` até o `</article>`), cole logo abaixo e edite os textos. Lembre de
trocar também o texto do `data-wa` (a mensagem que vai pro WhatsApp).

Para **remover**: apague o bloco `<article>` inteiro.

### 4. Horários, entrega e formas de pagamento

Estão na seção "Encomendas", nos blocos `<div class="info-card">`.

---

## 📸 Como colocar as fotos (quando tiver)

Hoje cada produto mostra um desenho colorido de "foto em breve". Para colocar
uma foto de verdade:

1. Crie uma pasta `fotos/` aqui dentro e coloque as imagens nela.
2. No `index.html`, ache o produto e substitua o bloco inteiro da imagem:

**Antes:**
```html
<div class="card-media ph-tone-1"><svg ...>...</svg><span class="media-note">foto em breve</span></div>
```

**Depois:**
```html
<div class="card-media"><img src="fotos/bolo-cenoura.jpg" alt="Bolo de cenoura"></div>
```

O tamanho e o recorte se ajustam sozinhos. **Dica de foto:** tire com luz natural
(perto da janela, sem flash), de cima ou de lado, num formato mais ou menos
quadrado. Não precisa ser foto profissional — foto de celular com boa luz
funciona muito bem.

---

## 🌐 O site está no ar

**👉 https://mpaulinhu.github.io/site-bolos-paes/**

Hospedado de graça no GitHub Pages. **Toda vez que você editar um arquivo aqui e
enviar pro GitHub (`git push`), o site no ar se atualiza sozinho em ~1 minuto.**

### Outras opções de hospedagem

**Netlify Drop:**
1. Acesse https://app.netlify.com/drop
2. Arraste a pasta inteira do site pra dentro da página
3. Pronto, sai um endereço no ar em segundos

Depois dá pra comprar um domínio próprio (tipo `fornoeafeto.com.br`, uns R$ 40/ano
no registro.br) e apontar pro site.

---

## 📁 Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | Todo o conteúdo do site (textos, produtos, preços) |
| `style.css` | As cores, fontes e o layout |
| `script.js` | O WhatsApp, o filtro de categorias e o menu do celular |

O site funciona no computador, no celular e no tablet, e respeita quem prefere
menos animação na tela.
