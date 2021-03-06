import React from 'react';
import {Group} from '../../wizard/components/form/Form';
import {NumberField, ReadOnlyValueField} from '../../wizard/components/form/Fields';
import BooleanChoice from '../../wizard/components/form/BooleanChioce';

export default function CylinderWizard() {
  return <Group>
    <ReadOnlyValueField name='datum' placeholder='origin'/>
    <NumberField name='radius' />
    <NumberField name='height' />
    <BooleanChoice name='boolean' />
  </Group>;
}