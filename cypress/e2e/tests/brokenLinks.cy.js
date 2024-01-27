describe('template spec', () => {

    it('broken links handle', () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=common/home")

        let brokenLinks=0
        let activeLinks=0

        cy.get('a').each(($link, index)=>{
            const href=$link.attr('href')
            if(href){
                cy.request({url:href, failOnStatusCode: false}).then((Response)=>{
                    if(Response.status>=400){
                        cy.log(`*** Links: ${index + 1} is Broken Links *** ${href}`)
                        brokenLinks++
                    }
                    else{
                        cy.log(`*** Links: ${index + 1} is Active Links ***`)
                        activeLinks++
                    }
                })
            }

        }).then(($links)=>{
            const totalLinks=$links.length
            cy.log(`*** total Links: *** ${totalLinks}`)
            cy.log(`*** total broken Links: *** ${brokenLinks}`)
            cy.log(`*** total active Links: *** ${activeLinks}`)

        })

    })

  })