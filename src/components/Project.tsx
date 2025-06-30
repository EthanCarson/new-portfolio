type ProjectProps = {
  id: string;
};

export default function Project(props: ProjectProps) {
  return (
    <div data-meta-id={props.id}>
      <img src="" alt={`${props.id} Image`} />
      <div>
        <div class="programs"></div>
        <div class="rating"></div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
        suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
        ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
      </p>
    </div>
  );
}
