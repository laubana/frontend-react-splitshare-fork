import React from "react";

const CloseFilled = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      fill={fill}
      {...props}
    >
      <path fill={fill} d="M0 0h24v24H0z" />
      <defs>
        <pattern
          id="a"
          width={width}
          height={height}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#b" transform="scale(.01042)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAElUlEQVR4nO2dz4uWVRTHP9hCRxcONtmmUmtnK0FaBUn+2jjkGCa5cF2ZgkT1V5ToJFEYkct2WiKp60heeJ1SUKoxK1PBxtEWkYvmxIUz8CrpvD/Ovfc8970f+G7mx/Pc53sv597n3B8PVCqVSqVSqVQqlYovVgJbgf3AEeAs8AMwDdwG7qlu68/C787o3+4Dtug1Kl2yDJgADgMXgDlABtScXusQsB1YWmvjfhYBLwKfAH8ZGL6Q/ga+BMaBx4a5MkaAt4GrCUx/mH4B9mpZhirMvAfczGj8g7oBvKtlK5rxzC1eFtA1YA8F8ixwyoHB0qVOAmsohB3ArANTpUeFAcHrNJglOvSThutYE4euTwAtB+aJkc4BYzSEVcBlB6aJsX4GnsM5zwN/ODBLIo6S1uKUp4HfHJgkkRUa2GqcMVZo2JGH6CfgSZwwUliHK13qOx3pZedTB2ZIJoW0d1Zec2CCZNbunOmFFOljca47udIWXzt4eHGikOdKyqsOHlqc6ZVU5i8zHu/PApsSj6Raek/LJOHVVDmj943j5wt63eWac4ltfhtYofdcB8wYXvud2OaHce/1COaTqBI6zSdCJdyIPb25L6L5sSvh/8yPUQlvEnH1gsV0Yoi76xe416hxn9DSaz6K9UZ9whX1ypyNRmaEzq8bRo0qoRvz59lk9IwbiMAXCUKBdThKea9OfUaEoaflW28KY9qZzA+6az0knTAsXD+hYbTHcBTz2t0qLMEx43CEAkqkVpqz5XfqQwy5GKmQYmyYF/ODpjBipdEq5dgho+Ug7HRqzmolxdbIBRWD1uup5fcz5H4k+xMVVvo00qv5oiuvB+ZIwgJLH6HEU9h5UJMYcDZxoaXHSvBqftBpi8JfyFBw6TG0eAo7nfreoPxZ1/O3B6yEnObPJ+YGxnLCImUlLM9sftAtiwq4l/khpI9K8GB+0D+1Amh+BdQQRN4QVDth8nbCdRhK3mHomQyxs1XIi9g3FoX/yLH5o85TEWEeZWBqMo68ybiajiZvOrpOyNCX+f9abm2NORJqFzoleR5DYu14bxc8Kf8BhmyPUMBW4ctStmFIWGRUF2bR08Is81XSnzsOO+LgXp06SgReNircMCzOfYkILNIz1gYtXOnL06djLU9HD9mzMKTkDRpvEJG6RYm8W5TQEw+tWuWdwjbpHSABYa/Ar4aFni1km+qVlOePxtgvIA2X6X6AbvjKwUOLEx0nA2v0jU+GXLN6Tl4WdjowQDIr+9miHzswQTLJZMrR4t3Awyo0SaxvgcU4Icz8XHJgiiTSjx6/zPGU8fuBOD62MlunuxBr9XBTKVTXPB/cOs+qQsPRJeAZGsKYnqspBXW4j9MwFhd0fP0IDWZCv/MlDdNdYBeFsLphuaMTnkc6gzBuNK0pkfS7pleKZqmeLnjdgeGdY/sDTfxUyaApjLd0IiOX8dN6yJ6blELOTxkeAv5M1Lke0xmxaKsXmsqI9hMH9bydOaNVylN6gNK2pg8pc7zQbdaNDpN69sKUho6Zjs/ZzujPpnRb0KT+z+Ymff2oUqlUKpVKpVKpMBT8B1OYxn2bJL5IAAAAAElFTkSuQmCC"
          id="b"
          width={width}
          height={height}
        />
      </defs>
    </svg>
  );
};

export default CloseFilled;
