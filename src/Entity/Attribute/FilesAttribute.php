<?php
/**
 * Webiny Framework (http://www.webiny.com/framework)
 *
 * @copyright Copyright Webiny LTD
 */

namespace Webiny\Core\Entity\Attribute;

use Webiny\Core\Traits\PlatformTrait;
use Webiny\Component\Entity\Attribute\One2ManyAttribute;
use Webiny\Component\Entity\EntityAbstract;

/**
 * File attribute
 * @package Webiny\Core\Entity\Attribute
 */
class FilesAttribute extends One2ManyAttribute
{
    use PlatformTrait;

    /**
     * @inheritDoc
     */
    public function __construct($attribute, EntityAbstract $entity)
    {
        parent::__construct($attribute, $entity, 'ref');
        $this->setEntity('\Ht\Entities\File');
    }

}