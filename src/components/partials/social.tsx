
export function Social() {
  return (
    <>
      {/* {{#if network}} */}
        {/* {{#if username}} */}
          {/* {{#is (lowercase network) "linkedin"}} */}
            {/* {{> info-tag text=(concat 'in/' this.username) icon="fa-linkedin-square" }} */}
          {/* {{else}} */}
            {/* {{> info-tag text=this.username icon=(concat "fa-" (lowercase network)) }} */}
          {/* {{/is}} */}
        {/* {{/if}} */}
      {/* {{/if}} */}

    </>
  )
}
