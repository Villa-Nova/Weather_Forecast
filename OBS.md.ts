// Existem cenarios onde o TS não vai conseguir fazer a inferência de tipos. Nesses casos eu faço a asserção de tipos usando o (as) para identicar o tipo que vai ser usado.

// Ao invés de usar o console.log, posso usar essa outra forma:
//   - devTools: Network, procurar a função/método chamado, clicar na url em Name.

// - type e interface são usados para definir e criaer tipos personalisados.
// - Posso criar duas interface com o memo nome que não haverá erros, com o type isso não é possível.
//   - Ex uso e criação:

    interface IUser {
      name: string;
    };

    interface IUser {
      age: number;
    };

    type TUser = {
      name: string;
    };

    const iUser: IUser = { name: "Villa", age: 23 };
    const tUser: TUser = { name: "Salvatore" };

    iUser.name = "Villa";
    iUser.age = 23;
    
    tUser.name = "Salvatore";

// Obs: uma constante aceito receber o conteúdo de um obj, já um type n.