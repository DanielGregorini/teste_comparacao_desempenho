import React from "react";
import Image from "next/image";
/*
PÁGINA 5

1. Parágrafo lorem76
2. Título lorem8
3. Título lorem13
4. Imagem
5. Imagem
6. Parágrafo lorem134
7. Imagem
8. Parágrafo lorem54
9. Imagem
10. Imagem
*/

function page5() {
  return (
    <div>
      <article>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magni
            explicabo pariatur libero reiciendis fuga, eveniet quidem dolor
            enim. Odit reprehenderit omnis aspernatur assumenda quidem a
            accusantium error quisquam. Asperiores voluptates, dolorem officiis
            facilis dicta magni optio doloribus odio consequatur. Magni,
            reiciendis, labore incidunt enim ad sunt odio quis amet quisquam et
            beatae placeat vero doloremque veritatis deserunt temporibus nihil
            fugiat. Nemo dolor ea alias quo quis molestiae minima voluptate.
            Dolore tempora quis quibusdam reprehenderit accusantium.
          </p>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur praesentium consectetur iste hic?</h1>
        </section>

        <section>
          <Image src="/image1.jpg" alt="Imagem 1" width={400} />
          <Image src="/image1.jpg" alt="Imagem 1" width={400} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptatibus sit eveniet vitae quam corporis nesciunt doloremque
            praesentium est sequi, necessitatibus amet non ipsum provident, ea
            voluptate. Reiciendis culpa repellat, aliquid repellendus eos iusto
            nisi dignissimos eaque praesentium ipsum architecto. Obcaecati
            perferendis velit doloremque minima ratione cumque. Soluta iste
            ullam dicta, itaque ipsum illum odio. Blanditiis, minima. Tenetur
            ut, unde ullam eveniet nisi incidunt nam repellat reiciendis
            quaerat, dignissimos necessitatibus sequi quas eaque culpa
            architecto voluptate nemo facilis repellendus modi! Nam non facere,
            delectus voluptatum alias aliquam tempore laudantium deserunt
            numquam molestiae harum id. Vitae voluptatum ad alias magni sunt
            sequi, qui quis, dolor odio eaque placeat rerum. Excepturi optio
            asperiores ab impedit delectus et quam sit, quas dolore sunt aut
            culpa nisi distinctio consequuntur, voluptatibus aperiam atque
            laborum vitae officia architecto aliquid. Asperiores!
          </p>
          <Image src="/image1.jpg" alt="Imagem 1" width={400} />
        </section>

        <section>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            recusandae quaerat maiores odio et facilis repellat tempora rerum.
            Incidunt non explicabo veritatis ab alias atque qui soluta voluptate
            laudantium debitis, aperiam cum amet excepturi quia voluptas
            possimus. Explicabo modi suscipit asperiores fugiat dicta, eius
            perferendis blanditiis quo voluptas odit similique at incidunt!
            Laboriosam, nisi?
          </p>
          <Image src="/image1.jpg" alt="Imagem 1" width={400} />
          <Image src="/image1.jpg" alt="Imagem 1" width={400} />
        </section>
      </article>
    </div>
  );
}

export default page5;
