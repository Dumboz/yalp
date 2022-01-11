import { createPortal } from 'react-dom';

export function InitSVG() {
  return createPortal(
    <svg xmlns="http://www.w3.org/2000/svg">
      <symbol id="calendar" viewBox="0 0 16 16">
        <path d="M11.078 0a1.141 1.141 0 0 1 1.142 1.143v.228h2.627A1.141 1.141 0 0 1 16 2.514v10.972A2.515 2.515 0 0 1 13.488 16H2.5A2.512 2.512 0 0 1 0 13.509V2.514a1.143 1.143 0 0 1 1.142-1.143h2.615v-.228a1.143 1.143 0 1 1 2.284 0v.228h3.895v-.228A1.143 1.143 0 0 1 11.078 0zm2.627 8H2.272v5.486a.23.23 0 0 0 .228.228h10.986a.229.229 0 0 0 .217-.205V8zM11.99 9.143a.57.57 0 0 1 .572.571V12a.572.572 0 0 1-.572.571H9.707a.571.571 0 0 1-.57-.571V9.714a.572.572 0 0 1 .57-.571h2.284zM3.746 3.657H2.284v2.057h11.42V3.657h-1.473v.229a1.144 1.144 0 0 1-1.95.808 1.143 1.143 0 0 1-.334-.808v-.229H6.03v.229a1.143 1.143 0 1 1-2.284 0v-.229z" />
      </symbol>
      <symbol id="fire" viewBox="0 0 16 16">
        <path
          fill="#F15C00"
          d="M10.875 2.258s.454 2.257-.454 4.063c0 0-1.363-5.418-5.904-6.321 0 0 .454.452.454 1.806 0 1.355-2.27 3.612-4.087 6.321-1.817 2.71-.408 4.373.454 5.164.908.903 3.179 2.258 4.087 2.709 0 0-3.633-2.003 1.817-6.97 0 0-.454 2.003 1.362 3.81 0 0 .908-.904 1.362-1.807 0 0 1.817 1.806 0 4.967 0 0 4.996-1.806 5.904-5.418.908-3.612-3.179-6.97-4.995-8.324z"
        />
      </symbol>
      <symbol id="follower" viewBox="0 0 16 16">
        <path d="M11.83 0H4.17A4.175 4.175 0 0 0 0 4.172v7.656A4.175 4.175 0 0 0 4.17 16h7.66A4.176 4.176 0 0 0 16 11.828V4.172A4.175 4.175 0 0 0 11.83 0zM4.17 1.778h7.66a2.396 2.396 0 0 1 2.392 2.394v7.375a10.32 10.32 0 0 0-2.628-1.395 3.88 3.88 0 0 0 .296-1.478V7.481a3.89 3.89 0 0 0-7.779 0v1.193c0 .508.101 1.01.296 1.478a10.34 10.34 0 0 0-2.63 1.395V4.172a2.396 2.396 0 0 1 2.394-2.394zm5.94 6.898a2.11 2.11 0 1 1-4.22 0V7.48a2.11 2.11 0 0 1 4.22 0v1.196zm1.72 5.546H4.17a2.378 2.378 0 0 1-1.765-.791.492.492 0 0 1 .178-.281 8.603 8.603 0 0 1 2.96-1.487 3.804 3.804 0 0 0 4.911.003 8.556 8.556 0 0 1 2.963 1.484c.09.07.153.17.178.28a2.38 2.38 0 0 1-1.766.792z" />
      </symbol>
      <symbol id="gallery" viewBox="0 0 16 16">
        <path d="M5.076 6.674a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        <path d="M11.83 0H4.17A4.175 4.175 0 0 0 0 4.172v7.656c.002.523.103 1.04.299 1.526l-.004.003.006.006A4.17 4.17 0 0 0 4.171 16h7.658A4.176 4.176 0 0 0 16 11.828V4.172A4.175 4.175 0 0 0 11.83 0zM1.777 11.828V4.172A2.396 2.396 0 0 1 4.17 1.778h7.658a2.396 2.396 0 0 1 2.393 2.394v4.854l-1.615-1.28a4.856 4.856 0 0 0-6.282.194l-4.53 4.068c-.004-.059-.017-.118-.017-.18zm10.051 2.394H4.171a2.37 2.37 0 0 1-1.539-.576l4.88-4.385a3.081 3.081 0 0 1 3.989-.122l2.721 2.157v.533a2.396 2.396 0 0 1-2.393 2.393z" />
      </symbol>
      <symbol id="search" viewBox="0 0 16 16">
        <path d="M15.762 14.659l-2.686-2.686a7.353 7.353 0 1 0-1.102 1.104l2.685 2.685a.78.78 0 1 0 1.103-1.103zM3.257 11.453a5.795 5.795 0 1 1 4.097 1.697 5.754 5.754 0 0 1-4.097-1.698v.001z" />
      </symbol>
      <symbol id="pencil" viewBox="0 0 16 16">
        <path d="M.014 14.955a.89.89 0 0 0 1.031 1.031l4.969-.877a.898.898 0 0 0 .474-.248l8.77-8.768a2.549 2.549 0 0 0 0-3.595L13.504.744A2.548 2.548 0 0 0 9.908.74l-8.77 8.771a.885.885 0 0 0-.246.474l-.877 4.969H.014zm6.68-2.815L3.86 9.306l4.923-4.924 2.835 2.836-4.924 4.922zM14 4.835l-1.125 1.126-2.835-2.835L11.165 2a.767.767 0 0 1 1.081 0L14 3.754a.764.764 0 0 1 0 1.081zm-12.013 9.18l.607-3.443.01-.01 2.835 2.836-.01.01-3.442.607z" />
      </symbol>
      <symbol id="reviews" viewBox="0 0 16 16">
        <path d="M11.83 16H4.17A4.177 4.177 0 0 1 0 11.828V4.172A4.175 4.175 0 0 1 4.17 0h7.66A4.175 4.175 0 0 1 16 4.172v7.656A4.175 4.175 0 0 1 11.83 16zM4.17 1.778a2.396 2.396 0 0 0-2.392 2.394v7.656a2.396 2.396 0 0 0 2.393 2.394h7.658a2.396 2.396 0 0 0 2.393-2.394V4.172a2.396 2.396 0 0 0-2.393-2.394H4.171z" />
        <path d="M11.969 6.99a.647.647 0 0 0-.189-.294.603.603 0 0 0-.308-.146l-2.018-.308-.903-1.915a.657.657 0 0 0-.235-.24.62.62 0 0 0-.634 0 .657.657 0 0 0-.234.24l-.903 1.917-2.018.308a.603.603 0 0 0-.308.145.647.647 0 0 0-.189.293.674.674 0 0 0 .156.66l1.46 1.49-.344 2.105a.673.673 0 0 0 .036.352.641.641 0 0 0 .208.279.599.599 0 0 0 .648.05L8 10.928l1.806.995a.59.59 0 0 0 .65-.047.637.637 0 0 0 .207-.28.67.67 0 0 0 .035-.353l-.345-2.105 1.462-1.49a.673.673 0 0 0 .156-.66h-.001z" />
      </symbol>
      <symbol id="save" viewBox="0 0 16 16">
        <path d="M13.25 16a.714.714 0 0 1-.436-.149L8 12.183l-4.814 3.668a.711.711 0 0 1-.78.06.772.772 0 0 1-.296-.294A.84.84 0 0 1 2 15.2V2.4c0-.636.238-1.246.66-1.696C3.08.254 3.653 0 4.25 0h7.5a2.18 2.18 0 0 1 1.59.704c.422.45.66 1.06.66 1.696v12.8a.828.828 0 0 1-.22.566.727.727 0 0 1-.53.234zM8 10.4c.156 0 .309.052.436.15l4.064 3.095V2.4a.828.828 0 0 0-.22-.566.727.727 0 0 0-.53-.234h-7.5a.727.727 0 0 0-.53.234.828.828 0 0 0-.22.566v11.245l4.064-3.095A.718.718 0 0 1 8 10.4z" />
      </symbol>
      <symbol id="photo" viewBox="0 0 16 16">
        <path d="M10.91 1c.152 0 .3.049.424.14a.753.753 0 0 1 .266.37l.56 1.74h1.658c.579 0 1.134.237 1.543.659.41.422.639.994.639 1.591v8.25c0 .597-.23 1.169-.639 1.591a2.15 2.15 0 0 1-1.543.659H2.182a2.149 2.149 0 0 1-1.543-.659A2.286 2.286 0 0 1 0 13.75V5.5c0-.597.23-1.169.639-1.591a2.15 2.15 0 0 1 1.543-.659H3.84l.56-1.74a.749.749 0 0 1 .266-.37A.712.712 0 0 1 5.09 1h5.818zm-.524 1.5H5.615L5.09 4.24a.748.748 0 0 1-.28.381.711.711 0 0 1-.447.129H2.182a.716.716 0 0 0-.514.22.762.762 0 0 0-.213.53v8.25c0 .199.076.39.213.53.136.141.32.22.514.22h11.636a.716.716 0 0 0 .514-.22.762.762 0 0 0 .213-.53V5.5a.762.762 0 0 0-.213-.53.716.716 0 0 0-.514-.22h-2.182a.712.712 0 0 1-.425-.14.748.748 0 0 1-.266-.37l-.56-1.74zM8 5.125a3.94 3.94 0 0 1 2.828 1.208A4.191 4.191 0 0 1 12 9.25a4.199 4.199 0 0 1-1.174 2.915A3.947 3.947 0 0 1 8 13.375a3.94 3.94 0 0 1-2.828-1.208A4.191 4.191 0 0 1 4 9.25a4.19 4.19 0 0 1 1.172-2.917A3.94 3.94 0 0 1 8 5.125zm0 1.5c-.675 0-1.323.277-1.8.769a2.667 2.667 0 0 0-.745 1.856c0 .696.268 1.364.745 1.856a2.507 2.507 0 0 0 1.8.769c.675 0 1.323-.277 1.8-.769.477-.492.745-1.16.745-1.856 0-.696-.268-1.364-.745-1.856A2.507 2.507 0 0 0 8 6.625z" />
      </symbol>
      <symbol id="talk" viewBox="0 0 16 16">
        <path d="M4.444 15a.943.943 0 0 1-.34-.063.895.895 0 0 1-.288-.18.83.83 0 0 1-.193-.27.785.785 0 0 1-.067-.32V11.45c-1-.195-1.9-.705-2.547-1.446A4.02 4.02 0 0 1 0 7.381v-2.22C.001 4.056.47 3 1.303 2.22A4.608 4.608 0 0 1 4.444 1h7.112a4.608 4.608 0 0 1 3.14 1.22C15.53 3 16 4.057 16 5.16v2.22a4.039 4.039 0 0 1-1.303 2.94 4.609 4.609 0 0 1-3.141 1.22h-2.46L5.021 14.8a.925.925 0 0 1-.578.199V15zm0-12.335a2.764 2.764 0 0 0-1.884.732 2.421 2.421 0 0 0-.782 1.765V7.38c.002.655.279 1.283.77 1.75.49.466 1.156.734 1.855.747.24.001.469.088.641.243a.856.856 0 0 1 .29.589v1.653l2.856-2.286a.92.92 0 0 1 .577-.2h2.789c.707 0 1.384-.264 1.884-.731.5-.468.781-1.103.782-1.765V5.162c0-.662-.281-1.297-.781-1.765a2.766 2.766 0 0 0-1.885-.733H4.444v.001z" />
      </symbol>
      <symbol id="share" viewBox="0 0 16 16">
        <path d="M8.8 2.731V12a.8.8 0 0 1-1.6 0V2.731L6.166 3.765a.8.8 0 0 1-1.132-1.13l2.4-2.4a.8.8 0 0 1 1.132 0l2.4 2.4a.8.8 0 1 1-1.132 1.13L8.8 2.731zM12 7.2a.8.8 0 1 1 0-1.6h2.4A1.6 1.6 0 0 1 16 7.2v7.2a1.6 1.6 0 0 1-1.6 1.6H1.6A1.6 1.6 0 0 1 0 14.4V7.2a1.6 1.6 0 0 1 1.6-1.6H4a.8.8 0 0 1 0 1.6H1.6v7.2h12.8V7.2H12z" />
      </symbol>
      <symbol id="star" viewBox="0 0 16 16">
        <path d="M12.498 15.985a.723.723 0 0 1-.351-.09l-4.132-2.093-4.131 2.123a.779.779 0 0 1-.764-.06.733.733 0 0 1-.305-.748l.764-4.485L.226 7.447a.744.744 0 0 1-.188-.765.747.747 0 0 1 .235-.338.772.772 0 0 1 .38-.168l4.613-.657 2.062-4.097a.753.753 0 0 1 .282-.308.776.776 0 0 1 1.093.308l2.061 4.097 4.582.657c.14.02.273.078.381.168a.733.733 0 0 1 .046 1.104L12.43 10.64l.764 4.485a.733.733 0 0 1-.172.613.762.762 0 0 1-.592.262l.069-.015zm-4.483-3.738c.125.002.247.03.36.082l3.107 1.607-.595-3.394a.733.733 0 0 1 .221-.665l2.52-2.4-3.482-.538a.774.774 0 0 1-.603-.404L8.015 3.44 6.488 6.535a.752.752 0 0 1-.573.404l-3.482.5 2.528 2.4a.746.746 0 0 1 .221.666L4.587 13.9l3.108-1.607a.872.872 0 0 1 .32-.045z" />
      </symbol>
    </svg>,
    document.body
  );
}