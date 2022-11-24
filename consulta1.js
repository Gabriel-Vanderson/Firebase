var dataRef = new Firebase('https://banco-hotel-default-rtdb.firebaseio.com/hotel');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'hospedes') {

            var _itemsKey = Object.entries(valor);

            count++;


            for (const [key2, value2] of _itemsKey) {

                $("#tbhospedes tbody").append(

                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +
    
                        <td>${value2.telefone}</td> +
    
                        <td>${value2.email}</td> +
                        <td>${value2.quarto}</td> +
    
                    </tr>`

                );

            }
        }


    }

});
