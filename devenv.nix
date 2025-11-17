{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  # https://devenv.sh/basics/
  env.GREET = "devenv";
  dotenv.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
