export function Pricemenu({ content }) {
  return (
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">{content.plan}</h5>
          <h6 class="card-price text-center">{content.price}<span class="period">/month</span></h6>
          <hr />
          <ul class="fa-ul">
            {content.features.map((a) => {
              return <li class={a.available ? "" : "text-muted"}><span class="fa-li"><i class={a.available ? "fas fa-check" : "fas fa-times"}></i></span>{a.highlight ? <strong>{a.title}</strong> : <span>{a.title}</span>}</li>;
            })}
          </ul>
          <div class="d-grid"><a href="#" class="btn btn-primary text-uppercase">Button</a></div>
        </div>
      </div>
    </div>

  );
}
