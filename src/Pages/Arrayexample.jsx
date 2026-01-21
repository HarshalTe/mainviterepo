const Arrayexample = () => {
  const datalist = ['a', 'b', [1, 2, 3, ['x', 'y', 'z']],{name:"harshal",last:"terekar"}];

  return (
    <div>
      {datalist.map((item, index) => {    
        if (Array.isArray(item)) {


          return item.map((subItem, subIndex) => {
            if (Array.isArray(subItem)) {
              return subItem.map((deepItem, deepIndex) => (
                <h1 key={`${index}-${subIndex}-${deepIndex}`}>
                  {deepItem}
                </h1>  
              ));
            }

            return (
              <h1 key={`${index}-${subIndex}`}>
                {subItem}
              </h1>
            );
          });

          
        }

   


      })}
    </div>
  );
};

export default Arrayexample;
