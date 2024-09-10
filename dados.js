let dados = [
     {
     raca: "Persa",
     imagem: "https://petanjo.com/blog/wp-content/uploads/2021/06/gato-persa-6-690x460.jpg",
     descricao: "O Persa é uma raça de gato conhecida por seu rosto achatado e pelagem densa e macia.",
     link: "https://pt.wikipedia.org/wiki/Persa_(gato)",
     tipo: ["Fada", "Psíquico"],
     peso: "3.5 - 7 kg",
     altura: "25 - 38 cm"
     },
     {
     raca: "Siamês",
     imagem: "https://www.agrosete.com.br/wp-content/uploads/2017/07/siames-1.jpg",
     descricao: "Os gatos Siameses têm uma personalidade extrovertida e são bastante vocais.",
     link: "https://pt.wikipedia.org/wiki/Siam%C3%AAs_(gato)",
     tipo: ["Normal", "Psíquico"],
     peso: "2.5 - 5.5 kg",
     altura: "20 - 25 cm",
     },
     {
     raca: "Maine Coon",
     imagem: "https://petanjo.com/blog/wp-content/uploads/2021/07/maine-coon.jpg",
     descricao: "O Maine Coon é uma das maiores raças de gatos domésticos, com pelagem longa e personalidade amigável.",
     link: "https://pt.wikipedia.org/wiki/Maine_Coon",
     tipo: ["Terra", "Fogo"],
     peso: "4.5 - 11 kg",
     altura: "25 - 41 cm"
     },
     {
     raca: "Bengal",
     imagem: "https://www.doglife.com.br/blog/assets/post/gato-bengal-saiba-tudo-sobre-o-gato-de-bengala-639a6a672ff02745fa5ddb53/AdobeStock_178453963.jpg",
     descricao: "O Bengal é uma raça de gato com aparência selvagem, devido às suas manchas e listras.",
     link: "https://pt.wikipedia.org/wiki/Gato-de-bengala",
     tipo: ["Sombrio", "Lutador"],
     peso: "3.5 - 7 kg",
     altura: "20 - 30 cm"
     },
     {
     raca: "Ragdoll",
     imagem: "https://portalvet.royalcanin.com.br/media/wp-content/uploads/2023/09/ragdoll-02-800x486.jpg",
     descricao: "Ragdolls são conhecidos por sua personalidade relaxada e seu comportamento carinhoso.",
     link: "https://pt.wikipedia.org/wiki/Ragdoll",
     tipo: ["Normal", "Fada"],
     peso: "4.5 - 9 kg",
     altura: "23 - 28 cm"
     },
     {
     raca: "Sphynx",
     imagem: "https://blog-static.petlove.com.br/wp-content/uploads/2018/05/gat-sphinx.jpg",
     descricao: "O Sphynx é famoso por não ter pelos, exibindo uma aparência única e exótica.",
     link: "https://pt.wikipedia.org/wiki/Sphynx",
     tipo: ["Psíquico"],
     peso: "3 - 6 kg",
     altura: "20 - 25 cm"
     },
     {
     raca: "Abissínio",
     imagem: "https://cobasi.vteximg.com.br/arquivos/ids/728801/AdobeStock_109468349.png?v=637594457139700000",
     descricao: "O Abissínio é um gato atlético e curioso, com uma pelagem curta e brilhante.",
     link: "https://pt.wikipedia.org/wiki/Gato_abiss%C3%ADnio",
     tipo: ["Terra", "Psíquico"],
     peso: "3 - 4.5 kg",
     altura: "20 - 25 cm"
     },
     {
     raca: "Birmanês",
     imagem: "https://s2-vidadebicho.glbimg.com/w6JmTd5LEErOQrQp-3p69YYLab0=/0x0:1920x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2023/f/F/5xCwWmQp2ppyfIjdBaCw/gato-birmanes.jpg",
     descricao: "Os gatos Birmaneses são afetuosos e têm uma pelagem sedosa.",
     link: "https://pt.wikipedia.org/wiki/Gato_birman%C3%AAs",
     tipo: ["Lutador", "Fada"],
     peso: "4 - 6 kg",
     altura: "25 - 30 cm"
     },
     {
     raca: "Russo Azul",
     imagem: "https://www.zooplus.pt/magazine/wp-content/uploads/2018/06/russisch-blau.jpg",
     descricao: "O Russo Azul é conhecido por sua pelagem cinza-azulada e olhos verdes brilhantes.",
     link: "https://pt.wikipedia.org/wiki/Azul_russo",
     tipo: ["Gelo", "Psíquico"],
     peso: "3 - 5.5 kg",
     altura: "25 - 30 cm"
     },
     {
     raca: "Chartreux",
     imagem: "https://www.tiendanimal.pt/blog/wp-content/uploads/2020/05/carater-chartreux.jpg",
     descricao: "O Chartreux é um gato francês, com uma pelagem azul-cinzenta e olhos âmbar.",
     link: "https://pt.wikipedia.org/wiki/Chartreux",
     tipo: ["Terra", "Fantasma"],
     peso: "3.5 - 7 kg",
     altura: "23 - 28 cm"
     },
     {
     raca: "Norueguês da Floresta",
     imagem: "https://blog.cobasi.com.br/wp-content/webpc-passthru.php?src=https://blog.cobasi.com.br/wp-content/uploads/2022/12/gato-noruegues-da-floresta-interna1.png&nocache=1",
     descricao: "O Norueguês da Floresta é um gato robusto com uma pelagem densa e à prova d'água.",
     link: "https://pt.wikipedia.org/wiki/Noruegu%C3%AAs_da_Floresta",
     tipo: ["Gelo", "Lutador"],
     peso: "4.5 - 9 kg",
     altura: "25 - 40 cm"    
     },
     {
     raca: "Cornish Rex",
     imagem: "https://media-eu.husse.com/media/b9/4a/16/1607080497/iStock-1180674725.jpg",
     descricao: "O Cornish Rex é conhecido por seu pelo curto, ondulado e sua estrutura corporal fina.",
     link: "https://pt.wikipedia.org/wiki/Cornish_Rex",
     tipo: ["Elétrico", "Voador"],
     peso: "2.5 - 4 kg",
     altura: "20 - 25 cm"
     },
     {
     raca: "Bombay",
     imagem: "https://www.infoescola.com/wp-content/uploads/2010/12/Gato-Bombaim_774381946.jpg",
     descricao: "O Bombay é famoso por sua pelagem preta brilhante e seus olhos cor de cobre.",
     link: "https://pt.wikipedia.org/wiki/Bombay_(gato)",
     tipo: ["Sombrio", "Fogo"],
     peso: "3 - 5.5 kg",
     altura: "20 - 25 cm"
     },
     {
     raca: "Exótico de Pelo Curto",
     imagem: "https://i0.statig.com.br/bancodeimagens/ch/ye/wu/chyewuok1z2ghfd7jfzgkahkw.jpg",
     descricao: "Semelhante ao Persa, mas com pelos curtos, o Exótico é carinhoso e calmo.",
     link: "https://www.petlove.com.br/exotic-shorthair/r?srsltid=AfmBOop0d69rM6aDJTypO2tOVOwwo6PfYpHWL7zIL17gGJtuZ-y20H-k",
     tipo: ["Normal", "Fada"],
     peso: "3.5 - 6.5 kg",
     altura: "23 - 30 cm"
     },
     {
     raca: "Savannah",
     imagem: "https://royalpets.vteximg.com.br/arquivos/ids/243104/savannah-320x250.jpg?v=637774155296670000",
     descricao: "O Savannah é uma raça híbrida entre gato doméstico e serval, com uma aparência selvagem e elegante.",
     link: "https://pt.wikipedia.org/wiki/Gato_Savannah",
     tipo: ["Terra", "Lutador"],
     peso: "5.5 - 11 kg",
     altura: "30 - 45 cm"
     }
    ];