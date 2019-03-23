import { contains } from '@lt-utils/contains';

/**
 * Method that checks whether cls is present in element object. (Will set class attribute to empty if not present).
 * @param  {Object} ele DOM element which needs to be checked
 * @param  {Object} cls Classname is tested
 * @return {Boolean} True if cls is present, false otherwise.
 */
export const hasClass = (ele: HTMLElement, cls: string) => {
  if (!ele.hasAttribute('class')) {
    ele.setAttribute('class', '');
    return false;
  }
  return ele.getAttribute('class')!.indexOf(cls) > -1;
};

/**
 * Method that adds a class to given element.
 * @param  {Object} ele DOM element where class needs to be added
 * @param  {Object} cls Classname which is to be added
 * @return {null} nothing is returned.
 */
export const addClass = (ele: HTMLElement, cls: string) => {
  if (ele.classList) {
    if (contains(cls, ' ')) {
      const clsArr = cls.split(' ');
      for (const clsItem of clsArr) {
        ele.classList.add(clsItem);
      }
    } else {
      ele.classList.add(cls);
    }
  } else if (!hasClass(ele, cls)) {
    ele.setAttribute('class', ele.getAttribute('class') + ' ' + cls);
  }
};

/**
 * Method that does a check to ensure that class is removed from element.
 * @param  {Object} ele DOM element where class needs to be removed
 * @param  {Object} cls Classname which is to be removed
 * @return {null} Null nothing is returned.
 */
export const removeClass = (ele: HTMLElement, cls: string) => {
  if (ele.classList) {
    ele.classList.remove(cls);
  } else if (hasClass(ele, cls)) {
    ele.setAttribute('class', ele.getAttribute('class')!.replace(cls, ' '));
  }
};
