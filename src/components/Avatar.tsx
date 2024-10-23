import { SimpsonsType } from "../lib/definitions";

export default function Avatar({ firstName, lastName, image }: SimpsonsType) {
  return (
    <article>
      <img src={image} alt={`Image de ${firstName} ${lastName}`} />
      <h1>
        {firstName} {lastName.toUpperCase()}
      </h1>
    </article>
  );
}
