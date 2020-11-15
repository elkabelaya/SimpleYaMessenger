export function getRoutePath(path?:string):string|null{
  if(path != null){
    let match:RegExpMatchArray | null =  path.match(location.origin + "(.*)");
    if(match && match.length>1){
      return match[1];
    }
  }

  return null;
}
