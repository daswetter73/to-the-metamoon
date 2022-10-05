import Image from 'next/image';
import Link from 'next/link';

import { socials } from './data';
import { Wrapper } from './Socials.styled';

const Socials = () => {
  return (
    <Wrapper>
      {socials.map(({ title, imgSrc, href }) => (
        <Link href={href} passHref key={title}>
          <a>
            <Image src={imgSrc} alt={title} width={40} height={40} />
          </a>
        </Link>
      ))}
    </Wrapper>
  );
};

export default Socials;
