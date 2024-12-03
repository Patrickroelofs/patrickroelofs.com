import { type ReactElement } from 'react';
import { cva } from 'class-variance-authority';
import type { Page } from '../../../payload-types';

type PinnedLayoutProps = Extract<
  Page['blocks'][0],
  { blockType: 'pinnedLayout' }
>;

const pinnedLayoutWrapper = cva(
  ['flex mx-auto max-w-(--breakpoint-2xl) w-full gap-fluid-lg'],
  {
    variants: {
      pinTitleTo: {
        left: [''],
        right: ['flex-row-reverse'],
      },
      spacing: {
        'fluid-3xs': 'my-fluid-3xs',
        'fluid-2xs': 'my-fluid-2xs',
        'fluid-xs': 'my-fluid-xs',
        'fluid-sm': 'my-fluid-sm',
        'fluid-md': 'my-fluid-md',
        'fluid-lg': 'my-fluid-lg',
        'fluid-xl': 'my-fluid-xl',
        'fluid-2xl': 'my-fluid-2xl',
        'fluid-3xl': 'my-fluid-3xl',
        'fluid-4xl': 'my-fluid-4xl',
        'fluid-5xl': 'my-fluid-5xl',
        'fluid-6xl': 'my-fluid-6xl',
        'fluid-7xl': 'my-fluid-7xl',
        'fluid-8xl': 'my-fluid-8xl',
        'fluid-9xl': 'my-fluid-9xl',
      },
    },
  },
);

export function PinnedLayout(props: PinnedLayoutProps): ReactElement {
  const { title, pinTitleTo } = props.content;
  const { spacing } = props.modifiers;

  return (
    <div
      className={pinnedLayoutWrapper({
        pinTitleTo,
        spacing,
      })}
    >
      <div className="w-1/4">
        <h2 className="text-fluid-2xl sticky top-12 font-medium tracking-tight text-pretty">
          {title}
        </h2>
      </div>
      <div className="w-3/4">
        Content Right Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Architecto deleniti earum expedita explicabo facere fugiat
        necessitatibus sint sunt tempora vel? Ad aperiam autem dolore, doloribus
        eius eligendi enim eos error eveniet exercitationem facere fugiat
        impedit in incidunt iusto maiores maxime nisi non placeat, quidem
        quisquam repellendus repudiandae sed sequi sit ullam unde veniam?
        Accusamus at, cum ea eaque enim fugiat officia placeat quibusdam rem
        repellat reprehenderit temporibus. Aliquid amet animi, architecto autem
        beatae corporis delectus dignissimos dolore dolorum eaque enim eos,
        explicabo hic illo itaque minima minus natus neque omnis quo quos
        ratione repellendus, sint suscipit unde veniam voluptas! Asperiores
        doloribus id impedit perspiciatis quisquam! Ab ad alias aperiam eum ex
        fugiat harum id illo illum incidunt ipsam iusto maiores nam nesciunt
        officiis quas quidem reiciendis repellendus sint, soluta suscipit
        tempore, velit? Aspernatur atque aut consectetur, culpa delectus
        dolores, eius excepturi hic id laborum molestiae nemo possimus provident
        quasi quisquam reprehenderit soluta! Adipisci at, corporis, eaque earum
        eos eum itaque nobis non numquam optio quas quibusdam quis, sequi
        similique suscipit tempora veritatis! Animi architecto consequuntur illo
        in labore perferendis quae sint! A aliquam aut commodi consectetur
        consequatur consequuntur cupiditate debitis doloremque earum, est
        exercitationem explicabo facilis hic id impedit inventore iste, itaque
        iure iusto labore necessitatibus nostrum optio perferendis porro
        praesentium rem sed soluta sunt ullam voluptatum. Asperiores cupiditate,
        doloremque fugit incidunt maiores obcaecati omnis quidem rerum similique
        tempora. Ab accusamus alias aspernatur assumenda consequatur cum debitis
        delectus dicta dolor eligendi et, excepturi facere fugiat iure nemo
        nihil non numquam obcaecati praesentium recusandae repellendus
        reprehenderit tempora ullam velit voluptas voluptatem, voluptates?
        Accusantium ad at blanditiis culpa dignissimos doloremque dolorum earum
        eius error expedita id ipsam modi nam nemo nesciunt nihil odio, qui quia
        quis quos reiciendis rerum sapiente soluta ullam ut vel voluptate? Ab
        adipisci aliquam animi asperiores atque blanditiis, commodi cum deleniti
        dignissimos distinctio dolores eaque error excepturi explicabo, in
        incidunt magni maiores minima molestiae molestias obcaecati optio
        perspiciatis, qui repellendus reprehenderit saepe sequi similique
        tempora temporibus ullam veniam vitae voluptatem voluptatum! Accusamus
        adipisci aliquam amet animi consectetur cumque cupiditate deserunt earum
        error expedita facere fugit illum laborum laudantium, nihil numquam
        officia quas quia ratione rem reprehenderit saepe sunt ullam voluptate
        voluptates. Non perferendis, ullam. Animi deleniti expedita fugit ipsa
        ipsum laudantium, nemo nesciunt nisi odit quae quam, rem tempore.
        Aliquam amet asperiores atque culpa ea esse, exercitationem fuga hic
        illum mollitia nesciunt odit officiis optio quod reprehenderit totam ut!
        Aperiam architecto beatae blanditiis consequatur dignissimos, ea
        excepturi expedita minus neque perspiciatis! Ab aliquam amet architecto
        cum debitis deserunt dignissimos eos, esse fugit harum illo ipsam
        laudantium natus obcaecati pariatur quaerat qui quibusdam quod ratione
        recusandae repudiandae temporibus totam ullam ut veniam, veritatis
        voluptas voluptatum? Aliquam doloremque doloribus eligendi, eos error
        et, laboriosam magni minus modi molestiae mollitia nam nulla quam qui
        recusandae! Accusantium alias consequatur consequuntur culpa, cum cumque
        deserunt dignissimos est excepturi hic ipsa ipsam itaque modi molestiae
        molestias neque nesciunt nostrum nulla obcaecati perferendis praesentium
        provident quisquam sapiente sequi tenetur. Earum hic itaque laborum
        minima nam obcaecati perspiciatis recusandae voluptates. Animi esse,
        ipsa maxime minus nostrum numquam pariatur perferendis porro quas quia
        rerum tenetur voluptatibus? Excepturi exercitationem fuga incidunt
        laborum molestias placeat totam unde voluptates. Autem dolores error
        inventore minus necessitatibus reprehenderit repudiandae ullam, ut velit
        vitae? Aut, consequuntur dicta eveniet expedita facere fugit mollitia
        nobis, possimus quae quia rem sit sunt tempora veniam voluptates!
        Aperiam culpa cumque error eveniet ex omnis placeat totam? Atque
        consequatur deserunt dolor eos iste molestiae nulla perferendis
        perspiciatis placeat, porro quo repellat! Aliquid aspernatur atque
        commodi dignissimos distinctio dolor doloribus, ducimus eius enim et
        excepturi illum ipsam minus, nostrum quo rem repellendus, sapiente
        tempora. A consequuntur dicta, esse et excepturi itaque totam velit.
        Adipisci alias aperiam aspernatur dolores doloribus error incidunt,
        nulla optio vel. Libero magnam, maxime optio perspiciatis recusandae
        suscipit? Alias aliquid asperiores eum ex officia perspiciatis
        praesentium, quasi quod rem, tempora totam voluptate. Ad alias
        dignissimos excepturi odit quod. Atque aut cupiditate laudantium modi
        nostrum officia quaerat. Alias amet beatae deleniti earum, fugit magnam
        minus mollitia pariatur ratione recusandae repellat rerum tempore?
        Deserunt expedita inventore libero mollitia, necessitatibus nihil nisi
        quae quam quod reprehenderit sapiente sit sunt unde. Ab accusamus
        commodi dignissimos distinctio doloribus facere fugiat fugit libero
        magnam mollitia necessitatibus omnis pariatur quam qui ratione
        recusandae rem, repellendus suscipit tempore totam vel vero
        voluptatibus. Accusamus atque illum ipsa numquam sunt, ullam velit
        voluptates! Autem ea hic nesciunt praesentium? Adipisci alias, animi
        aperiam architecto asperiores aspernatur autem cumque delectus deleniti
        ducimus enim eos eum eveniet facilis hic impedit, in modi nam nulla
        numquam perferendis quis quod, quos repudiandae rerum sequi temporibus
        ut vel vero voluptate. At cum esse illo illum iure libero necessitatibus
        nostrum placeat quaerat unde! Accusantium animi assumenda aut
        consequatur culpa delectus distinctio, eaque facere harum inventore iste
        magni molestiae mollitia nam numquam obcaecati officia porro possimus,
        reprehenderit sunt tempora unde vel veniam vero vitae. Culpa dolorem
        fuga veritatis voluptatum! Amet atque blanditiis enim iste laudantium
        minus, modi molestiae quaerat quia reiciendis? Ab amet debitis
        doloremque eum in iste iure libero nemo possimus, quos reiciendis
        repellendus temporibus voluptatum. Aliquam architecto assumenda at autem
        distinctio dolorem doloremque ea eaque est et ex excepturi explicabo
        ipsa iusto laboriosam minus modi nemo nisi, nostrum numquam odit
        pariatur quaerat quas quasi quo quod reiciendis rem tempore totam vel.
        Aliquam aliquid consequuntur cumque eveniet expedita facilis impedit
        ipsa iusto minima molestias quisquam rem soluta, tenetur vitae
        voluptate. Autem culpa id, minus officiis quaerat quasi quod? Aliquam
        aliquid amet aut corporis cum deserunt esse id omnis placeat ratione sed
        suscipit, unde, vel, vero voluptate? Amet aperiam atque enim fuga libero
        quia quibusdam quo, sed. Adipisci architecto, at consequatur culpa
        deserunt dolore doloribus eligendi eveniet facere fuga numquam omnis
        perspiciatis quam qui sint tempore ut vel, voluptatum. A consequatur
        cumque deleniti deserunt dicta dignissimos distinctio dolores doloribus
        earum esse eveniet expedita illum impedit in ipsam ipsum laudantium
        magni maxime minus nobis omnis pariatur porro quas quasi qui quis
        recusandae rem repellendus reprehenderit sed suscipit tempora, tenetur
        totam unde vel veniam voluptate! Ab amet reiciendis ut vel voluptas?
        Animi architecto dolor ducimus earum eius error, eum ex id impedit in
        inventore ipsam laudantium libero molestias necessitatibus nemo omnis
        optio provident quis quod repudiandae soluta temporibus tenetur vel
        voluptate. Accusantium earum nihil numquam perferendis quibusdam tempora
        vitae. Culpa libero odio ratione, reprehenderit rerum similique
        voluptates. Aut cum debitis doloribus enim error, exercitationem ipsa
        itaque laudantium libero mollitia, nisi perspiciatis, quaerat quod
        repellendus sapiente sint totam ullam voluptatum. Architecto asperiores
        at atque aut, deleniti dignissimos doloribus ea eos et facere id
        incidunt iusto maiores mollitia optio placeat, quisquam quo quod
        repellat repellendus reprehenderit sapiente similique sunt ullam unde.
        Ab accusamus aperiam corporis, deserunt, dolor doloremque harum laborum,
        nihil numquam quis repellat vel! Ab accusamus aperiam autem consectetur,
        corporis dicta est explicabo hic id impedit itaque iure laborum
        laudantium magnam molestiae pariatur possimus quasi quos recusandae sint
        tempore voluptas voluptate voluptatum! Aliquid animi aspernatur, at
        autem cumque dicta dignissimos dolore doloremque dolorum earum error
        explicabo hic illo illum ipsum iusto libero minima minus molestias
        mollitia nemo nobis nulla numquam obcaecati omnis quaerat sint sit sunt
        suscipit tempora unde velit vitae voluptatum! Consequatur dicta
        doloremque dolores eveniet laudantium nobis provident quaerat, qui quia
        ratione repellendus repudiandae saepe suscipit.
      </div>
    </div>
  );
}
