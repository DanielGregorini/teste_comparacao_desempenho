import React from "react";
import Image from "next/image";
/*
PÁGINA 4

1. Imagem
2. Imagem
3. Imagem
4. Título lorem4
5. Parágrafo lorem45
6. Imagem
7. Parágrafo lorem80
8. Título lorem9
9. Imagem
*/

function page4() {
  return (
    <div>
      <article>
        <section>
          <Image src="/image1.jpg" alt="Imagem 1" width={400} />
          <Image src="/image1.jpg" alt="Imagem 1" width={400} />
          <Image src="/image1.jpg" alt="Imagem 1" width={400} />
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut iusto
            delectus totam nesciunt quae ullam provident laboriosam laborum ea
            rem suscipit assumenda ad autem vel, eos repudiandae odio
            consectetur quaerat iure nemo. Repellat aliquid voluptatum molestias
            amet nobis sequi eveniet? Impedit quos quae quas vero.
          </p>
        </section>

        <section>
          <Image src="/image1.jpg" alt="Imagem 1" width={400} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            voluptas quaerat fugiat pariatur soluta consequatur. Maxime aperiam
            veritatis voluptatibus soluta molestias delectus quisquam doloribus
            tempora cumque ipsum magnam odio incidunt reprehenderit doloremque
            deserunt ducimus, dolor ipsa distinctio dignissimos ut! Iure
            excepturi laborum aliquam obcaecati. Assumenda doloribus, corporis,
            magni fuga reprehenderit voluptatibus ullam fugit iste
            exercitationem dolorem laborum animi illum, repudiandae perspiciatis
            repellat nihil ut? Ex corrupti corporis dolorem? Dolor vitae fugit
            architecto officia quo autem voluptates sapiente doloribus iure
            exercitationem!
          </p>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore!
          </h1>
          <Image src="/image1.jpg" alt="Imagem 1" width={400} />
        </section>
      </article>
    </div>
  );
}

export default page4;
