class Product {
    constructor(title, image, desc, price) {
        this.title = title;
        this.image = image;
        this.desc = desc;
        this.price = price;
    }
}
class ShoppingCart {
    items = [];
    render() {
        const cartEl = document.createElement("section");
        cartEl.innerHTML = `
        <h2>Total:  \$ ${0}</h2>
        <button>Order Now!</button>
        `
        cartEl.calssName = "cart";
        return cartEl;
    }
}
class ProductItem {
    constructor(product) {
        this.product = product;
    }
    addToCart() {
        console.log('Adding Product to Cart')
        console.log(this.product)
    }
    render() {

        const prodEl = document.createElement('li')
        prodEl.className = "product-item"
        prodEl.innerHTML = `
            <div>
                <img src='${this.product.image}' alt='${this.product.title}'>
                <div class="product-item__content">
                    <h1>${this.product.title}</h1>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.desc}</p>
                    <button>Add to Cart</button>
                </div>
            </div>`;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener("click", this.addToCart.bind(this));
        return prodEl;



    }
}
class ProductList {
    products = [
        new Product('a Pillow',
            'https://asda.scene7.com/is/image/Asda/5054781496182?hei=1800&wid=1800&qlt=85&fmt=pjpg&resmode=sharp&op_usm=1.1,0.5,0,0&defaultimage=default_details_George_rd', 'A soft pillow', 'A soft pillow'),
        new Product('a Carpet',
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXGRgXFxgYGBcYFxUXFxcWFxYYFxcYHiggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0vLS8tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLf/AABEIALcBFAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EAEEQAAICAQMCBAMFBgQEBQUAAAECAxEABBIhMUEFEyJRMmFxBiNCgZEUUmKhsdEzgsHwQ6Lh8RUkY3LCBzRTkrL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAoEQEBAAEDAwMDBQEAAAAAAAAAARECITFBUfADEoFhkbEEEzKhweH/2gAMAwEAAhEDEQA/APjQwiDBLjEeSseIY5EMWiGNxjJqh0xiI4suHhXJM/G3GWU3gB7YzEuSo1CMchTF4ATmpDFxk1UDY9stDlymXSPEZhTxlHGSowE8uEh1KpjMWnzOSfnNGCbClF2jyY0vKySjIgk5wMyuny3kgYaOTO35JlimWQA4wyCsX210xhDQXlRpxhXkzknBwBaWMDMjVAXWamufMsJZxxNLGKxlTB8s0vK4wU61ePIwxNWuJA1j2pW8W8r3y4hQyYnqVxkx4GVcaaR2nFtWnfNFkOIaoHGRdG4zsFnYsGCqYZBkqmSMtIyHGo2xRBh0yTOxY2mIwjGozeKqhmMYzEMAvGO6OOzk041PD4O+aEi0MBpa6YdmvIaFN/OOQc4vt/nj0MfGAVfFHiJ7ZrJCMmSCsMjDHGn+WQeMeZMG0V48lguhvDxJjMGkw4gGGTwpF0y4y8icYuhN4gJLIRlIpecZdeMzpBzgLTGpaxi0JxmKGxkNFWAK6h/fBRVjrae+uWi0V4ZLG5KcjFNRJYzbm0ArnMnUacA4QXLIWK8rqtLQzUkhFDM/VsarKynBSKAYGaMDLSkgXgROCOcZBaiUDtmVrJOM0tSVrMmcX0ypE2s/Jwnl52LIw4A5IXCsAclFvLIMYeL3yRHeWfjEBlbtjun4GK6OPjGTiqjEI3HNrTpQxLw7TjNFj7ZFVBEk7YR5cXjXvh44rOJQumsnNMcDFooqyZXOIx49TWOGcVmNuwxOGBkSaUHKIecrHH747HEMZLebxgl1BxtYARimrjrEYyzXlh74rp5B3wzMMALK3GLq4vLuwrFQfVRxkfDZzQ3lZlAAo5B1BC85KgZ2I+mAh1jA3lZNTYOUA4OVhJyTVFwQMz5oyOScLol65OoaycBWa4Y8DFNTpG75vBgos5manUFjx0whVgvGTYOKTRkZuylR164nqYgcuVFjPTS2MR1EQQHNfdt4GZusHHOOUrGWrXnZO3OyTWYAZZRxx1OXGm3GsZgipr9umXamOEW0fPLppbF5eWJuAeLzQVRtodsnKyQSsLp47OMSxChZxiDTgLY6dsWTwcgoLhI2vjE+g/p88nSWOTkm2FAA+uEjbuMzItQWb5DgZo6VuxxHBWcjLaefdlJ51qu+CgkAwwMmSgwcrUcvBNZ+WRqWUnjGDunQHDvFzgNEo743M6gYjDaUr0wLKXyscgLc445HRcOByVMIXrhZISRxlpIyx+mV88rfGAZgZw1HGvIHXKSyX6qwg1oHBGOlCz6oA0TkS61Txk6wq56UP65SPw0H1e2GxbqwQ2euNvpQR8WAjhNGsW06OWPWsDHnAXgHBQvR598YVE9RI5H9cUlc8CuuBLa6yh5zP0yGjjLaEn8WLTgxAg44L3Z5qzuyqHdfOGliBF3iM8Rq1ykqRwPZ9szvE74xhZZea6d8jXachLPUi8aWWuRnRrxkZCjce4dD2xvSBmNEjjnK6fRbiSSPoMf0Gm3g7kog9L6jLthSBu5arIvsMLppWokgUDX1y+j8Mt/WwBJ4UdduGXwsmbY20J2G7n9MnMOZWQKw5U1jejK/DRHteB13hbq9BgidOT8RxmTSSRkCy10bFcfXJ2UJLphd3dYprm7CrP8ALG/EoJQqjhrPYG/zrpi2pgk5Z4RQ73WEFG00FdOgH64zDKVG4jk9BmafSAVEn5Cx+uPRSqSCZVIHaucLBkaIhid3GG2r06e2d6WFqU/M1g2gLEcA17HA13Whx0zo1JS65xyKRK20Sf8AXLDeTsUV+WLIwogO0YeBgeL5wyQkDsT74jLoebsq9+x6e+BtFNOoUkct7ZXXBtgA6++V0ziyoNkdWo9chV9VmRq7iiAPrgBbfy/iF5V9UgUj4jXXBy6hAPUTzxwOg9/pgIn04uiSRxdcMTgLT2nWPygD1685WURheRzlDKshAWReBZ7AV1B+eLyuSQwa4m4oV2+uIB+anmlX+CrFY9qdZGm1VFhvb/plVgi3UWoEcBhtP6nLT6WMSpEhpuoqzY+vTGGedT5bL7MaAxnVTqALYKSaHFX/AHyZtIsjCw6SIbC9Tz0P0OLTRvIRvjCLG3LyEWa7gYAbUaYrbn4B1xTWTAAHgKRYOG1+pb9nkVCW39zwK+Q74noY1ZEWVCQq7bPufljncrzhmDVMSaYfLCK/AEgsN3xifwtIyQCA3a+nPbApMzAqUoA7Qe7Edays9k47sxiFlKqbB6ZMpCce5vKhgwDKpD7iBfcj2/TE9XIsgJY7Sh5A6/PKwnIsMg6dicT1OoBaQN7ejGoIUo7WZrFgV0+uZniZFD1Wfl2xAtCvGTjWmgO3OzK1eDCoVZmFKWHc8DK6CdkkZRwx5LGyKxVo2IW33D5c9MZgiRWAZybri+QPmPbpmzNpnUP5gLUBVBwPfrWTFCok8wyU10rcHr0J9sS2jqFDL0tgQO/A3EDt1vNPSyqXMYjQMQSVLIHF0boE0K45yVHzI2w7tQpcWQPSwvtTZnnSTSruaUM/7po9PYiucYbWxhZLWMqtbu20/NgCM79rCoCyRgiyrDj0tdHlabqO/NH3GKHd2tDJqI4rOyQjqqqSwFcdDzxgxqJ/LoIpI5KA24s91N4OEuwXZEOhtiEAIBNenuePpycqL58uEO4pnZRAVFgncVLgg1fH8JxYPLQ8NeaONi8asAbPIBA+ig8/LGEfaCf2dqYWPSg57A83/LE0nVUtIJFO3qI5tp6HcPKPPPz46E52r8TgICsXXeQWWV5Ixz2Hnr6u3FDtziweU+Gttk9cDpGTZ3B25+m2qv55bUaaAzl9xKtS7EKLRruGrtmpoFjjFwyFgzBSV8tgOtlgpFAAdvf541PC4kUl6qwoEcrJ0oXtcBT8z16XyMM7jDCn0+liIMcoAHLWSSfaiCAPrjmjgilQvHMUdh3ezXzXd1x945xe79nkFAlKZfTz+AByTwf0OV1WlKoD+xQMm34VZLB9rdFokXQJHxYAPw/whejyzErybtVA/K7wGmBE/lbw+9iAQ017R1UnaRwPmMY0+pgVtrwNApFeqBmAsAg+ahZKCjoa6HD6WdGdDGrTRfAJoZVIj78hDfPSxfbHilnsF4z4a6EffLHF0tnN7v0r6c4XW6MIiM809MRTKgdRxwSFF18/nmktK4WafYXakQsreZVfDuUGyCDxdYnqtdK5lgV9zoabyQFlXi1KrNw9jup96wGWfro5IY/NOqiKj+EqG9xQJvi+2BgWeQboSroo4SOgDYvlXUXfyIz0GncCIICJJ41NGZfvHarNrQJsfiUEdawWv00+p0pHOklJJJVg2zbwBfBKn5VwRgHntNPE0wikhCFuPVYdT781Yv2ymp8JXesaaoeYvqETixZNir5ze8QRotG0mpjWRo47PVtxPSr5Bbj6fPPJafTHUBZIhMjKwfyZ1ccIONkpHPfqT+WOFa1vNnDSecvD0ofaXiXb1odR3w2nVWdv2ZzFtW99goWvn0n2xTwz7Su07R6hzG1FPKK0d26t6t0bi+Rxjz6WGRHfTh1lU7WNbfkGKdHFdxhYcqmu1eoiUSyost0BJFxJt+aHqPpk67VRalNsbAyjny3GxyPxKwOTLNJp3WTUIaVNpdbKEGu34W+uWl0cU8YaQB3ZvQ6cMoLenkew7/LJMLSeCu8YO9lFUE2gMB2Bbp74jrvAo/hjlcOGG4ht1H5j641rE1MStGJP2mIWGF7ZEPUAMOuZnh2jh8uRYZHWQ+oBuJI5KuiT8S3jAOu0M0ZuYh4yRcg4KMPhse2KMjNTU7AEkbeCp6G/kc24fFmlhHnptP8Ahz38PPAesyXV4pGiSMyKPhYtSgHtffHEq+HRrvUyLVelVHO2+rMffA+OeHIbvavax1P7pxuXSS+WzNGvJqkPNfXMxE3nZHdKQr7uSOf9/ph1yPoUSQxcWTY2gHqx/tmT4hbShAAO9DPQ6nUR75ZmN+V6APn3OA+ynhpnkMzDgnDVqxMiTNw0tB4X6BYzs9UsVcVnZye6un2vjSNR9Y2g8BrLBb/lno9GAL44qgPSm81dg97+nvmLtG30kOrdve/YD6n5/SsvoJDCwUldpPpY87Seo9Xt0s3nfZlxy4OxB9Ody3LEzcqOXia+SvXp0IzRl099N8iOrLtUkOWattgUABTAlufqctLJGVYyKVTlSCVCm/Vu9/kPzFYKLWmKPaXYKGJ8yT0gbrrZGKv6kAZHKuD8WmKIxeQI4XaTx6wDwskpQA/OlsBv1NoHWozFHbgAFiDsYlRQWVxbcgEbR3/RTR6B5JCyp64yp3TEyCRTtNod2xOLqhxZzp/FojIUSOTUyCUSR1R8pgBahzwqcGx09zhybXGqkf1I5b1iNjBR2MSFYuZOw7kKO1nE/FoVgmM0ZBG4pMm4uSCAWJ3E9LBr+Lmupd1WvZbmYBXjO7UQRlJLVujFiN1hf1CcXjmp06MoMSIIZVZi/oVHdhwBRt2NgX2FdsUuDsy1NKqy7RGtRqooqw8nabBUL+9QHVQAHA4PGYXhqGDUvo3Z/Vul0shckyIAbjNECQg3ts0a9qGV+zmvkhhmgUb5ov8ADU2yv+ILXY1x17D2zY+1vg7Ppo3jCrqIPvYlQ+kbNu9FUfEp9HQV+uOTFwM5mWF9o2WKNfXE7epgskKSahyfwiOPbsUVuLFj1w2r12mQRSIHMbOiTywTyCOCVgpAZdxFeog+nil78ZpTawOkEu/bp9XSsqKfOLSo5sSLyNpRVoUevNcZbQ+GeXEJNWVG1JdLqd7Kq6qEX5Ulk8tW0ck/Gcc43KlfD2laaSOHWTxmFS7rqoY5VaIMBvjkUAsNu0i/b9HTrdXtVzHBrIWTaz6d+3RvQ5ZSPSe/bpiuk8VjIiGmhl1rQ7o4ZyBGqg7hTGgXVqRbqjuY9VGH1kcsSHUa+f0xMh8rTl44xvYKrSH45QSUNXXqfg1hgG9B9oYjNEqEafaNjQSxmA3Y2lCQAxDAihx971FZoa3w7SSMqypUrB3SWNXhdV6WJk22dpj9N87TxxmY76h5HTWRaWTSMajDC5CSBtIQ7rJ29SFO5T0HGHn0cumdRpJwd1sdLMxKuBfpikPrWjYrkAheBeSEzeEagrugZNSoLARapdsoo1tScAk9Ktgbsc84F/tW77ov/tdSvllY51Xc4FWEJNOCQBuDcAk7eKyuh8VUzEymbTTMuxoHYmOYKKvTNdM4KsQVNnup4OE8W10UkEq6rTtKiEbBVtIh2/eR3z6SXv8AFXNdMM74pY2aswiG2OQlvPJMSOFKxkKBtBQVxVjnd6uMR1q6qAqiq8+nK7SoaploU22QEFyeTRN+zds8/B+0ab1aSV9XAlB4JTWog6BQqkC/QwG08/6av2b8eEyyFpZm9ZkAqnULtuIgWR8LGj74rsca3gs3/l6hfe62R5hO4nrUorcDfuL+tYXQeMftUTVHtlS1KMRRcdgwsbTxRrpmZPp45tQJoWaOYqrb1+GRLI2SL9RyCL9jwctP40AxhQ+RqCKQyJ6JSOhU3z24uxeI1NNBHrYSmsh8uVGZWX8cIJbYUcdQVqmHXnMTzn0BYqWn0xPplWi8e08iQVTcnrnrNJqnj04l1ZUTbfvNvQWSP/1F/wA8X1+p02lgMip92asRrYN9SQvBBPU4/d0GOrD8J8TaSGXzdbH6jvRzRA67oyvtQ+uXOnRGjn0kqbHsbTfluyg7iO6HEvtb9no+NRE4jaT8NDy34BBI7Gu+ZvgXj/7OGglQLITaluUuux9jWVzMwuLu1NR9pAYmSvIlZ7IIsk8WVY9RQ65TWrFIwR19QNhhwwFWzlvb5ZMumg1L7pnDM6AhV/DXWj7Z57VwaiAWQXRrqz6q9snanu9JPGyK8cn38LrXtKo/+WZGm8JhSIyeZJP7Rgn0/Ij5YsPGCBuDWzUGv4gB+FfbCtr1YnaQsnuvSvY++LeHtRJPtERL5TRUF2lSPwg++La1tmoYKa81LvtuHP8AbLvrwAwlAthRcd8wvENfuICeprpT7DpjhUKYGbVGFOj0Wr+efVPDfDBDCFXjpnjPsR4A0c4lkHY9c+kTD05h6urNxGvpacTNZki0c7Jd+c7MWr43pdqsfUu1h0J+FrvoOxxtRFt2l0b59AG/hFUBziK6w0VthfU+WeB2Ue2aOn8Rj3rUihB+AggsfckjPRuXDML6WFiAFkjLD4Wb1VzwFHReD7ds2BoNvmMpMjOtMu+0ZjxxYJXg9sVUKQzOiSMbraAeD0AqrPGG8F0W5fMJkiY8BQ3Cc0CQR1F5Nq5EP4LqJVvUT1AtERw8b7Itdxq+Nw5P4ce8L1UMMTIY20scgZUdlNowHG6RiVYsCxH0q+axjVNPsFhJU6JQp/kSORmrp4lZQhBAuiGAUMRQJo2Kot+mR7lTSxfDfFC0iGdGjlEYVo1UMZy101UTsW5LHAF4x4HGp8zSvGsj6djJpQ5KipN4B9PAVTXfgVxxed4lHqllDwvGIydrMF3SqAWJoE80SwrCaycxmCVTK3kkQSb1AYo5UF+nQN5VHnvlZ7EiedIp9PqF2hmIjlEZFWwJ3BgaIBtSb/AM9xHrWAdpkVFQ0h62jKCztxQFuRX8GeH8T0dpJpgkESkboo4zyKP3juK4N0OOACcd8N18vk6UoyhTJ5MyMoK8itovndvQjv8A4h9sLvD07Vo+GxzQxz6eFQPJmBidgSDHKS8ioWFBlBNdRuUjnpl9T4RpJHgaXdqDL6UZ332SJJl4B2/CjqAoC+kX2ymp+0BilfziscKx8KWUsxMhBkCqDSla4JuwaHXMTRa1nSKLSae0gorNqTtCnruRRyOBxXQMRxfJLeRccPVOxWGaNwNOELrFIAqrQclXjXdfdbugb44zIl8bl1YK6GMtwAZ2GxBQYArfJIbcDXz5zOHgJIWWUnWTkgBZXdIgeATtrcVrj5g9OM1/F5YDGsE0mwMQpCsYw7nauxdpBNn+XHY4swYrN1Ph0mnMWolkaWRZELsb2rGeGrrZXrZq9h9+dzxN0R45G2l9zLGViMjgtyAm0UpHlgFjwdh75ifaqQPG0Kr6ViLKa27a3Dixz9K6V9cV0ni5kgjXcxNKDUjxt6R6jvQE0a6Dk2DiurMyJMXB3X+Kkz6qCRY5IhHHKofatA/GC9ccqOvIKX7jFIvFER9sEpdhW2DUB2VyvqIhmb1dQP3gCg4o3mfLq/K1OoloEeVHETu5Mh67b6mv64jJrBcjHUkSGNVV03Ehub9TEtXPbriyHqYNXE7SlAYtZKqgmblhQC1GRw6KBYCnkjnrgvF9MpcmNnhljVVOoqkmbsrqSfMF11H0Oeak8UTYqBXkUdWcFiW9wTyuRD4nNupEcr23ndX0J5H64s4PlvL4tLEFilZtOyvfmrTRSfJiRY78Hn1HnG/EJoNSGMhkZAQyuSAB8oyKIrreYgi1jqQsQA9jffvR6nGdF9i9Y4BZljU88Cq+oyffD9tOx+MzwEiUDUw9AxrzEXtu7OeBmvF9o9O4oFdpHQ0tE9QVOYTfYx9zbpmYCul1+mamg+xMG9Nx3c85nfW01pPT1Qv4jrtNKoV6KR/CpNC16dMxpNXFJGyugYknatE17c57aX7L6dZWAQH8rxnSeGxRhCEHBPbI/exsr9rO75XBo5rJhSQH+n0vtj0Gi11BRz1PPa/fPq0iLfChb7Dr+eW/YgPipQR1H+uXfV1VM9LTOXysfZSV3USMOfYYzH9lEUWWPDV/PPompQB41NHnqO+JayNdsnHRj+WZavV192k9PT2eW8S+ykQkjUWQR0wSeCxx2Qo9LD+ub3iOo++gr93BNGSs9j2OTq13JzRGsYQACB7ZMrivc5ePmJT/AA4uzcXXU/7OaVLPdv4RnZWdRf8AXg/3zsQfGVeNyfWymxRvhQPl74d4ybK0yDgBqtz7/Ic5l/tUbfElGqsYSED8EnPUAjjPUw8/LV1Hh5jVXBaMk/hJoH6dMLB4hqV/9UDgXYagDfPf/pmbLqZNwElkCiK5H6ZqL4nE7xlui3wBRJ4qxk3PVUw0x9oY5GSMHy6K2XABqxYv34q89TrteqRmUszqdtqAXAurpR0+JrzwkkI1Ez0FSIVVjnp/fA6eR4U3xyPEpNDd8DXd8H6df7ZF0S8LmqvoMmlj3horiahRQ0rMepIojrfJHf5YciVozG4SZOQapWIHw8HgcHtVVfbPIQfaDUJtEsQeq2uhI6jn0it19e+bXh/j8EkysGCcfA4ZGsC/iJojg8fT3zOzVFyytXxCSPzFkQxpJ6Q7SrTOtEFbajRs9Luz75nJI8XmqjGJXKlXALEF6D0o7HaPbmQ/mq2vBV4twVQDUjEMXPqvgdvh9sWHjUCrbOEYXx0LDkWFF8X0HWsM0Njw6HTbwxuaWixllt9yq5AYE+kKeouuC3WstN9oVYEx2Xav8NtycMCAZDUe7g2BfQ8HPHanxt3O2NXlU0F3BQDXSwRXuOmMx+Ha+St4dFv0qK6kdgfka4w1bb2lLnaNPV+NO5VptQqxsxUiDjaFsNcp9TWV2+nb2PIzF1PjibFiiRiol8xyA3qIIPViSSSASSTnpfDf/p+DKiS7rA3Ebg1AC6+X0zf0X2c08URoRkkN13bh7cDjMtXr6Zw0npary+fqNVqWbZFRcWSKBqq5IAsZp6P7Iap4gzOQN20ADp9PbPouk06qybUH+EDwt/2xuNz+zLxZLHgD65jf1Gq5w0nozq8TpP8A6fhnTe8ptrO8AX+hzfj+xOmV2oAMDwCPS2a3hsRE6AqR1NsgX/U3mp5G8ycWQ3QkgfXjrizq1ff/AA/bp0sCHw6KBqZQN3xAqAhHyxn/AMEiIJhXg8lDwf8AL8sb12rVQqvskBNWDW0jsCeh+uCeSjaXJ8yTcY9iBkWzi8f2uTrBtKVFKyk13Aop8ucOqFTuUhlPUnmvywbaiNztJ3EC96A8f+7Bzyup3bgAa2sABHX8WVnEIZ0UmQ/TLeWoeP09T7ZRW9Lk+4Hp6HJZxuj5/F2A/ucU7+cn5/S2przn+nsf9MA6nykrqWOGmYea9cWPdv6AYuZahjI6iTFeb8/kTifH4Eii5PQN3scn6HAaqQEUG3Me1dD88vNPbVMyA9FSO2c/U5PkEKLUBOSard+eVZ0gnesyc08QLAsGF7RwPqcnXciYfM9icJ4kyqqbWUpuBFfED88Cr2JR15I4DHt8uP1zK8484V9Wd4pSnTMzADabJ6duuRp50Y6hY3V9yEivkMH45NUemb0kWRTdPbn5cYHwp/vgNsSkqf8ACNi6/rldfOyW/wCHgtp4yO6jAhuO4/t8v5532ekuAC7osPfocTkkrir5+v6jNc7RHVTzFs236X/oM7BJIPYfo2dgHwWvY5DKR1GVyQ2eu8sWPUMOhOF/a7reL7dMVvLpGT0BP0xG0dHqALCvtvs3Kn6/98ek1jufUUcgWvIpT70etZkxeGy t0Rs9F4V9g5peXZY1 + ZBORqumcr0zVeCy + J9bAG4DewIuhXANkLx2A7 + /OVTXEqwRGkv+H0qB0G7qfmT1rtnsfDvsbpopH3Lv2JfqPfg2B9Ma0GhQD0xp7WJPUDz1jB4+ucuv9RpnEdGn0dV5rx2l8A1E7KpAQEbuEJIHudov2z0nh/2 LhSJ3b1Heqg8jjm + ueqGluVrCjYg / AW5A7106dTjEEQ8mNWvlmc0L4uhwevQ5za / 1 Gut9Po6YEPC4VswRAx9HJHosDqhPO76Zp + Eqbbb0LUJW60AOEBHGLFXkkRreRUulMIKDoOiuBf1GWj81d7UdrtzGYWVRx1X1HnqbFZnbf5NJ2bcMIScgD / hnknk / M / PETL9zXmLVH07yT1PUAc / rl9C5Mjm3NQn4gAea61eDK / dbQe37z9zfQDaMnVdvuqTf7GByRe3iNasgdvmMIY28mPobY9Bff2HXJaKnYAsfSq9ZOygXS8dsDLP9zFRsAtfU8A3XAJ6Htzk4586w88edDfgkP3gNVQJ5Rk / UMxORrXcAlWEdMTvZwqgdwRRLdemW + z8oMhoUAtAAue / 8 YBzO8V0IkG + uhI3te0WQfUFF9 / ll3bRMd6mfy + IkaqN7dU89 + N9Dy0P8Wwct + eF2mWgSWFW0MYKhTXFsOP1OZUULrTJH6CQNzgoh + H4UU7iPi6nGtVMwCFpN6 / jTaYRzVUo68XzfbJ91n8vPPlWJ088 + F3hVCB0ccARDzJiOwLCkB5xddRL + ACJS2wlyssvztbofTH9PoRtUSEBbLRhRcnJ7lDXt1vGo4ZC33SqCrDeCfvKN2dxFD8sqZ6f9LYKNCsDdfj44q6HsOmcZANnuXHZR + lAYwhJgI / iI7 + 2 BlYkp0NSD8TmuR13dPyxdPiDqtKa1D / Je2 / 5 fu / 8 AbBN / gA3 / AMTGNYlTMRtFj8W488e3 / bAq1wLuH / E5 / n3x3nV8 / kpxPh0 + nIYsgDfvKVXcP / bVXi2p8SXlUAZ6sr5dbevxFjQGYviXiuoTUESjetnakZXdz0G4DC6rQvKqGVDElUQm0vV / jNi + 3 v8ATC6ux + 3 uV1njaODErBmuyY0GwUeRfU8e3GMRSEPJ1o / wvzwewND88iXSCOLZEImUkepRT8fv + /65XU6dzNJ6d3IA9KNxdD4iK7c5PUUn4nJ/ 5 WEj9++l9N3YnAabUsJ4ySO4H3TR / wAj1 + oymudv2QCuVl5H5f8AXFW1Csy1Vg9N8xPb98ekfQ5aHofCZCss8fbduHsAR2 / UZXUS0Prd / wBcz9PPWp + RQ / 8 AKRR56ilw0z2ODWaThNDMxPNfzzsUZx75GVhL5b / 4 Ue2SvgjnHUY + 7 fqDjcJb95v + XO6 + pXH7IW0XgC36zfyHGb + l0aLwqgDEIZWv4j + i / wB8aWZyPjP / ACZnq12tNOmRt + Hmun0P + /0zb0z1XX3+WeU0+rkHYH/L / qMePiD7CFQAkVwG7 / lmWqtY0n1gCzt7kIKA / p9Bg9DKGZFG3qB / hlT26n8WYojYIqG / j3sff5XXGaem1LGVSGYhQT6mBon2v6DOfVGkp4aizqHFH1Ffx + /uPT+ubGlQGWONXpkiBHPc31H+bPJ6TRM8YFkMz2Tx09uv9c3F0UnnvIGZA4C+kruCgKDRvj4RkYmVxoLqVWUMoKan4TGl7H5HJH09svCzMzGe2l3UkO70/Lc3 QL8h + pxORVXaqKY1HJYsvmsT / Fu4GO + DuvkmORFa2JDBgCTfUsDd / PDPdR + Jio1LOw3BQp22FU30F / 74 wT6m4h67 + GvXf / LQxQaFik6M1rIVI + ImlN8EDGZ9KzRhAXobf3 + g46Ee2Rc2bKnLRaO5ZCQxAPYCgKPu2ZsliONeauTn131HXZ6u3bnGtHpKV7S2a6ZgxYcVwcrHomOwPYCg9n7kn9cVl7eZOGvCZCqytfRfdyO / d + f1ysKbkVixADX6r8s9OtdDlNJpSiSqOknur / 7 HXK6OKo6kHIvaCx4 / Lp2x4u2fr + S7i7pIjzzuP + GqWjAjvzX6DBT + FxyMQBsf / wDEzHaT / wCmegPTGUlIWq3j24r / ACkG1OKzqBuKD4iL3KSy17diPnjvH088 / wALqHpGeNnTy444152sx3VQshup / Lj5YxFAkpVonbaCCyrYbvyQeG + owv7YjArLUiD4WoB1 / L2wWtWzHb3H1DpW4e28Dn88LpmNtxmmtNJcBNfjPfntgZtSDsAaqccCUv37j8OKJq1XTEn97r3yNXOuxG20PMTkR7Lv + L8WLO3xDxv8tiaU + ewXzLofDt46e / bEZXP7OLs / efMdstq5E88g7eBfIPyPbvmfHrIzABZG6Qn / AEx6rvfktM2nwY18PlJ5kSLIb59IsfXviy + MRuliUow / 4 YiXeSeOLu + e / wCuM63UW9wAlvxN / wAMD + I9Cc8 / LpllYHd6yxub4VFdkC0D9cq7XZM35NzalxtWRyXLA + XY9C3xu2gUfllPEYkM735Yog + sNV9bFHE9ckmnjO9VdN6t5grcTz1PU9crr9ReobbuO9FPpYKTwO5xYFqkqBoZ1sUGU8XXWuBmc2lQrYkiBr4VMm79C1X + WX / ayG1KFWspfxbugvk9 + uC8O1LtFxvraRwqbT / mPOXJUWxLTuskRsMCCLN3dVXPzI / nmiJeDeY0mrHkRyEXT7Tz05sHNB2BJI6ZcTSz6jk1WdiUknJzs0wjLxQkNE8da6Y4t2q + nnnpnZ2dGphBoW5f0p6flhvOKxbqWyaqh / XOzszq4u + p2IrkD1e1j + mP + F6vzQ1L8Ivlm / vnZ2TZtlUu5yOY + k7T6uBTt1x3S6r4uGpTzZVv65GdmN4aym49QN1ULP8AAn69cdh1yk8BeOv3a / 3 zs7IrSC / twtaAtjQ + 7 TnCabxB6kA3ej4uUFfShnZ2TDOw6pzsHqtxY + 8 OH02odkdqPo4I3t2yc7FOfOx5FGoYBGrhzQG5sKrsZGjrlRu + Js7Oxyb / AG / At / 0 KLUuY9 / bdtrc3vh5pGUhTdnpTX / XOzsOn2Gd / uWbWpdE0e + 5 Af5rjEa302 / kZFyM7FpuaeraJeJq5Un57lb / +hikoQEdRz + 6 P / icnOx6tMLRbVGjBFBlPXghh / ocIIGraQStg0GHbpVjOzsnTpitVsWaKTzC538ir3JYHtmXNpTS0H4JP4O5vjnJzsq6Imaqb1G51Kt5hB6i0A / liUqgDabCjsWNfoq5OdjsLLN1LRlSpah7es1XtZxKV49wb2FD0ij + pzs7HIKWmaPk9OP3R / ocVhKAABhX0Yf0OdnZcRSupC9ARXsNwzQ0jUoGdnZcjOltSPVkZ2dlxL //Z',
            'A soft pillow ',
            89.99
        )

    ];

    constructor() {

    }
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl)
        }
        return prodList;

    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app')
        const cart = new ShoppingCart();
        const cartEl = cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();
        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

const shop = new Shop;
shop.render()