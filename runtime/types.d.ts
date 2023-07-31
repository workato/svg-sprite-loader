export interface SvgIcon {
  id: string;
  width?: number;
  height?: number;
}

export interface SvgSprite {
  symbols: SvgSpriteSymbol[];
  find: (id: SvgIcon['id']) => SvgIcon;
}

export interface SvgSpriteSymbol {
  id: string;
  viewBox: string;
  width: number;
  height: number;
  content: string;
}

declare const sprite: SvgSprite;

export default sprite;
