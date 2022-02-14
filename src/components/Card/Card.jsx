

export function Card ( props )
{
    return (
      <div className={style.cardStyle}>
        <Link to= {`/show/${props.product.id}`} >
        <div className={style.imgStyle}>
          <img src={props.product.image} />
        </div>
        <div className={style.nameStyle}>name: {props.product.name}</div>
        <div className={style.priceStyle}>price:{props.product.price}</div>
        <div className={style.contentStyle}>
          description:{props.product.description}
        </div>
        <div className={style.sellerStyle}>
         {/*  seller:{props.product.seller} */}
        </div>
        </Link>
      </div>
    );
  }